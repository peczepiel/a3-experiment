import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MongoClient } from "mongodb";

const CONDITIONS = [
  "Control (Baseline)",
  "High Contrast",
  "Med-High Contrast",
  "Medium Contrast",
  "Low Contrast"
];

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI required");

let clientPromise;
async function getCollection() {
  if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  const client = await clientPromise;
  return client.db("color_task").collection("results");
}

const app = express();
app.use(express.json());

app.post("/api/condition", async(req, res) => { 
  try{
    const {participantId,condition,times,avg}=req.body;
    const ok =
      typeof participantId === "string" && participantId &&
      CONDITIONS.includes(condition) &&
      Array.isArray(times) && times.length === 3;
    if (!ok) return res.sendStatus(400);

    const col=await getCol();
    await col.updateOne(
      {participantId},
      {$set:{participantId, [`conditions.${condition}`]:{times, avg}, updatedAt:new Date()}, $setOnInsert:{createdAt:new Date()}},
      {upsert:true}
    );
    res.sendStatus(204);
  } catch(e) { console.error("POST /api/condition failed", e); res.sendStatus(500); }
});

app.get("/api/others-averages", async(req, res) => {
  try{
    const exclude = typeof req.query.exclude === "string" ? req.query.exclude:"";
    const proj = Object.fromEntries(CONDITIONS.map(c=>[c,`$conditions.${c}.avg`]));
    const grp = Object.fromEntries(CONDITIONS.map(c=>[c,{$avg:`$${c}`}])); 
    const col = await getCol();
    const [row] = await col.aggregate([{ $match:exclude?{participantId:{$ne:exclude}}: {} }, { $project:proj }, { $group:{_id:null,...grp} }]).toArray();
    res.json(CONDITIONS.map(c => ({condition:c, avgTime:row?.[c] ?? null})));
  }catch(e) { console.error("GET /api/others-averages failed", e); res.sendStatus(500); }
});

const file = fileURLToPath(import.meta.url), dir = path.dirname(file);
app.use(express.static(dir));
app.get("/", (req,res) => res.sendFile(path.join(dir, "index.html")));

if (path.resolve(file) === path.resolve(process.argv[1]||"")) {
  app.listen(3000, () => console.log(`Server running on http://localhost:3000`));
}

export default app;