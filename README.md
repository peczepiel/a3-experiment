Assignment 3 - Replicating a Classic Experiment  
===
**Project Description and Background**
--- 
**Created by: Anthony Coutts, Peter Czepiel, and Timothy Hutzley**
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

**Chosen Colors and Test Layout**
---
*Please note all colors below have been converted to their approximate HEX color because Github README does not support Lab colors*

| Contrast Rating | Test 1 | Test 2 | Test 3 |
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