Assignment 3 - Replicating a Classic Experiment  
===

**Project Description and Background**
--- 
Our experiment tests the users' reaction time to colors with different amounts of contrast appearing on the screen. We conducted our experiment by making the user do three tests in each of our four trials (12 total tests). Our group believes that the reaction time of users will be quicker when testing on colors of higher contrastWe chose the four different trials based on the different levels of contrast outlined in the Web Contrast Accessibility Guidelines (WCAG). These guidelines define contrast in the three sections below:

1. Low Contrast: Good for graphical images and large text (Contrast Rating of 0-3)
2. Medium Contrast: Good for small text (Contrast Rating of 3-4.5)
3. High Contrast: Best for all other components (4.5-7+)

We believed some of these ranges (specifically Medium and High) were too large. Therefore, we implemented a fourth section to create our four trials that we test users on. Below is a breakdown of the four sections that our group used to outline our trials:

1. Low Contrast: Range of 0-3, find a color that is ~2
2. Medium Contrast: Range of 3-4.5, find a color that is ~4
3. Medium-High Contrast: Range of 4.5-7, find a color that is ~6
4. High Contrast: Range of 7+, find a color that is ~8

These four trials will consist of three tests each where the user will be shown a starting color, then be asked to click whenever they see that color change. To remove as many other variables as possible, we chose our colors using Lab space (instead of RGB or Hex). We generated our 24 color palette using the Brown University Color Palette Generator.

**Chosen Colors and Pictures**
---
*Please note all colors below have been converted to their approximate HEX color because Github README does not support Lab*

| Rating | Palette 1 | Palette 2 | Palette 3 |
| :--- | :--- | :--- | :--- |
| **Low** (2) | ![](https://img.shields.io/badge/_-BA836E?style=flat-square) ![](https://img.shields.io/badge/_-956D5E?style=flat-square) | ![](https://img.shields.io/badge/_-50842C?style=flat-square) ![](https://img.shields.io/badge/_-256C1E?style=flat-square) | ![](https://img.shields.io/badge/_-A299C2?style=flat-square) ![](https://img.shields.io/badge/_-CBB0D5?style=flat-square) |
| **Medium** (4) | ![](https://img.shields.io/badge/_-B06553?style=flat-square) ![](https://img.shields.io/badge/_-FF8E72?style=flat-square) | ![](https://img.shields.io/badge/_-22701F?style=flat-square) ![](https://img.shields.io/badge/_-76A618?style=flat-square) | ![](https://img.shields.io/badge/_-A68CCF?style=flat-square) ![](https://img.shields.io/badge/_-FBA4D3?style=flat-square) |
| **Med-High** (6) | ![](https://img.shields.io/badge/_-9E3C2B?style=flat-square) ![](https://img.shields.io/badge/_-D97753?style=flat-square) | ![](https://img.shields.io/badge/_-00582B?style=flat-square) ![](https://img.shields.io/badge/_-6FA571?style=flat-square) | ![](https://img.shields.io/badge/_-0098DA?style=flat-square) ![](https://img.shields.io/badge/_-D1E4FC?style=flat-square) |
| **High** (8) | ![](https://img.shields.io/badge/_-5CD6A3?style=flat-square) ![](https://img.shields.io/badge/_-746E02?style=flat-square) | ![](https://img.shields.io/badge/_-D5AFF6?style=flat-square) ![](https://img.shields.io/badge/_-2B6350?style=flat-square) | ![](https://img.shields.io/badge/_-D6E8E8?style=flat-square) ![](https://img.shields.io/badge/_-986150?style=flat-square) |

**Results and Visualizations**
---
At the end of their tests, users will be given two charts populated with data for them to look at. 
1. The first will be a chart that shows how different their reaction time was in each contrast level. This chart will be populated with only data from one user. 
2. The second chart will show how the average all of their tests compared with the average of all other users' tests in each contrast category.
Here are two examples of what the charts look like:
- Chart1
- Chart2 

**Technical Achievements**
---

1. Kept timing consistent

**Design Achievements**
---

1. Used Lab colors instead of Hex or RGB

**Resources**
---
- WCAG: https://www.w3.org/TR/WCAG21/#background-on-wcag-2
- Contrast Checker: https://coolors.co/contrast-checker/e5ffff-87a3a5
- Brown University Color Palette Generator: http://vrl.cs.brown.edu/color
- Lab to Hex Conversion for README: https://www.nixsensor.com/free-color-converter/?srsltid=AfmBOoroXBHQHl3y9riHy3LYlBupOlmsAERbdpeboL6-LybPIix5yGqs
- Website and Documentation for Small Colored Squares in README: https://shields.io/badges


**EVERYTHING BELOW THIS LINE IS FROM THE ORIGINAL README**



- Low contrast color palletes (2 rating):
            [lab(60, 20, 20), lab(50, 15, 15)],     (Hex Approx: (#BA836E) + (#956D5E) 
            [lab(50, -30, 40), lab(40, -35, 35)],   (Hex Approx: (#50842C) + (#256C1E)
            [lab(65, 10, -20), lab(75, 15, -15)]    (Hex Approx: (#A299C2) + (#CBB0D5) 
- Medium contrast color palletes (4 rating):
            [lab(55, 40, 20), lab(75, 55, 30)],
            [lab(45, -35, 50), lab(65, -20, 65)],
            [lab(65, 15, -30), lab(85, 30, -20)]
- Medium-high contrast color palletes (6 rating):
            [lab(40, 60, 30), lab(70, 40, 50)],
            [lab(35, -40, 45), lab(65, -20, 25)],
            [lab(60, -20, -40), lab(90, 0, -20)]
- High contrast color palletes (8 rating):
            [lab(85, -40, 15), lab(45, 0, 55)],
            [lab(80, 20, -30), lab(40, -20, 10)],
            [lab(90, -10, -10), lab(50, 30, 30)]



Generating palletes via all in Lab space: http://vrl.cs.brown.edu/color
 - Low contrast color palletes (2 rating):
            [lab(60, 20, 20), lab(50, 15, 15)],  
            [lab(50, -30, 40), lab(40, -35, 35)],
            [lab(65, 10, -20), lab(75, 15, -15)]
 - Medium contrast color palletes (4 rating):
            [lab(55, 40, 20), lab(75, 55, 30)],
            [lab(45, -35, 50), lab(65, -20, 65)],
            [lab(65, 15, -30), lab(85, 30, -20)]
 - Medium-high contrast color palletes (6 rating):
            [lab(40, 60, 30), lab(70, 40, 50)],
            [lab(35, -40, 45), lab(65, -20, 25)],
            [lab(60, -20, -40), lab(90, 0, -20)]
 - High contrast color palletes (8 rating):
            [lab(85, -40, 15), lab(45, 0, 55)],
            [lab(80, 20, -30), lab(40, -20, 10)],
            [lab(90, -10, -10), lab(50, 30, 30)]


For the scope of this project, assume the role of a scientist who runs experiments for a living.

For example: 

Q: How do we know that bar charts are "better" than pie charts?  
A: Controlled experiments!

In this assignment you'll implement a simple controlled experiment using some of the visualizations you’ve been building in this class. 
You'll need to develop support code for the experiment sequence, results file output, and other experiment components. 
(These are all simple with Javascript buttons and forms.)
The main goals for you are to a) test at least three competing visualizations or experiment conditions, b) implement data/stimuli generation and error calculation functions (if following the baseline, use Cleveland and McGill's 1984 paper and Heer and Bostock's 2010 replication), c) run the experiment with 10 participants (or equivalent number of trials), and d) do basic analysis and reporting of the results.

For this assignment you should aim to write everything from scratch. For experimentation it is often necessary to control all elements of the chart.
You should definitely *reference* demo programs from books or the web, and if you do please provide a References section with links at the end of your Readme.

Going Beyond Cleveland-McGill
---

Several have expressed interest in conducting surveys of various sorts. I encourage you go move beyond Cleveland and McGill if you can think of other interesting visualization experiment designs and corresponding analyses. 

You might study how people interpret COVID visualizations or design an experiment on shapes or color, for example.
If you decide to go in a custom route, do plan to sync with staff so we can help you set acceptable parameters that would be fair to folks following the original route.

(Basically, we still want you to do a multi-trial study with each participant, to raise the chance that you get solid results.)

How you measure "error" and similar facets also matter. But you can't go wrong with finding a good visualization study online to start from :)

Requirements
---

- Look it over Cleveland and McGill's original experiment (see the section below) and [watch this video](https://www.loom.com/share/636660b72d00436a8ae910f91d67a0c7) to get a sense of the experiment structure and where your visualizations will go.
- When viewing the example experiment video, note the following:
    - Trials are in random order.  
    - Each trial has a randomly generated set of 5-10 data points.  
    - Two of these data points are marked.  
    - (Note: the experiment UI and User Experience could be better. Plenty of design achievements here).
- Implement the data generation code **as described in the Cleveland & McGill and Heer & Bostock papers**. 
    - The goal is to generate a set of random datapoints (usually 5 or 10, with values be between 0 and 100) and to mark two of them for comparison in the trial. 
- Add 3 visualizations (i.e. conditions) to your experiment. When you are adding these visualizations, think about *why* these visualizations are interesting to test. In other words, keep in mind a *testable hypothesis* for each of the added visualization. Some good options include bar charts, pie charts, stacked-bar charts, and treemaps. You can also rotate your bar chart to be horizontal or upside-down as one of your conditions. You are encouraged to test unorthodox charts -- radar charts come to mind, but there are MANY possibilities here-- feel free to be creative!
    - Follow the style from Cleveland and McGill closely (e.g. no color, simple lines) unless you are specifically testing a hypothesis (e.g. color versus no color). Pay attention to spacing between elements like bars. Do not mark bars for comparison using color-- this makes the perceptual task too easy.
- After each trial, implement code that grades and stores participant’s responses.
- At the end of the experiment, to get the data, one easy option use Javascript to show the data from the current experiment\* (i.e. a comma separated list in a text box) and copy it into your master datafile. See the Background section below for an example of what this file should look like. (\*Alternately implement a server, if you're experienced with that sort of thing.)

** DATA SCIENTISTS! IT IS YOUR TIME TO SHINE **

- Figure out how to calculate "Error", the difference between the true percentage and the reported percentage.
- Scale this error using Cleveland and McGill’s log-base-2 error equation. For details, see the background section (there’s a figure with the equation). This becomes your “Error” column in the output. Make sure you use whole percentages (not decimal) in the log-base-2 equation. Make sure you handle the case of when a person gets the exact percentage correct (log-base-2 of 1/8 is -3, it is better to set this to 0). 
- Run your experiment with 10 or more participants, or-- make sure you get at least 200 trials **per visualization type** in total.  
    - Grab friends or people in the class.   
    - Run at least 20 trials per visualization type, per participant. This is to ensure that you cover the range of possible answers (e.g. 5%, 10%, ..., 95%)
- Make sure to save the resulting CSV after each participant. Compile the results into a master csv file (all participants, all trials).
- Produce a README with figures that shows the visualizations you tested and results, ordered by best performance to worst performance. Follow the modern Cleveland-McGill figure below -- though note that using names instead of icons is fine.
- To obtain the ranking, calculate and report the average log2Error for each visualization across all trials and participants. This should be straightforward to do in a spreadsheet.
- Use Bootstrapped 95\% confidence intervals for your error upper and lower bounds. Include these in your figures. Bootstrapped confidence intervals are easily implemented in R + ggplot2 using the `stat_summary` geom. You can also use Excel, Python, or many many other tools. Bootstrapped 95% CIs are **very** useful in modern experiment practice.
- Include example images of each visualization as they appeared in your experiment (i.e. if you used a pie chart show the actual pie chart you used in the experiment along with the markings, not an example from Google Images).

## General Requirements

0. Your code should be forked from the GitHub repo and linked using GitHub pages.
2. Your project should use d3 to build visualizations. 
3. Your writeup (readme.md in the repo) should contain the following:

- Working link to the experiment hosted on gh-pages or some other site.
- Concise description and screenshot of your experiment.
- Description of the technical achievements you attempted with this project.
- Description of the design achievements you attempted with this project.

Background
---

In 1984, William Cleveland and Robert McGill published the results of several controlled experiments that pitted bar charts against pies and stacked-bar variants. 
Their paper (http://www.cs.ubc.ca/~tmm/courses/cpsc533c-04-spr/readings/cleveland.pdf) (http://info.slis.indiana.edu/~katy/S637-S11/cleveland84.pdf) is considered a key paper in data visualization.
In particular, they ran a psychology-style experiment where users were shown a series of randomly-generated charts with two graphical elements marked like this:

![cleveland bar chart](img/cleveland-bar.png)

Participants were then asked, "What percentage is the smaller of the larger?". 
This was repeated hundreds of time with varying data and charts. 
By the end of the study, Cleveland and McGill had amassed a large dataset that looked like this:

![cleveland table](img/cleveland-table.png)

__Log-base-2 or "cm-error"__: The true percent is the actual percentage of the smaller to the larger, while the reported percent is what participants reported. 
Cleveland and McGill recognized that their analyses would be biased if they took `abs(ReportedPercent – TruePercent)` as their score for error. 
To compensate, they came up with a logarithmic scale for error with this equation:

![cleveland equation](img/cleveland-equation.png)

You’ll be implementing this error score as part of the lab. 
(Hint: it’s not a trick question, this is just to familiarize you with the experiment protocol). 
With this Cleveland-McGill error score you can better compare the performance of the charts you test to figure out which one performs the best.

As a baseline, compare your average Error scores to the following chart, which include both Cleveland and McGill’s results as well as more recent extensions of this experiment (lower error indicates better performance, and error bars are bootstrapped 95% confidence intervals (`http://en.wikipedia.org/wiki/Confidence_interval#Meaning_and_interpretation`)):

![cleveland results](img/cleveland-results.png)

GitHub Details
---

- Fork the GitHub Repository. You now have a copy associated with your username.
- Make changes to index.html to fulfill the project requirements. 
- Make sure your "master" branch matches your "gh-pages" branch. See the GitHub Guides referenced above if you need help.
- Edit this README.md with a link to your gh-pages site: e.g. http://YourUsernameGoesHere.github.io/Experiment/index.html
- Replace this file (README.md) with your writeup and Design/Technical achievements.
- To submit, make a [Pull Request](https://help.github.com/articles/using-pull-requests/) on the original repository.
- Name your submission using the following scheme: 
```
a3-FirstLastnameMember1-FirstLastnameMember2-FirstLastnameMember3-...
```
