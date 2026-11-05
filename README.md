# COVID-19 Early Outbreak Dashboard

## Project Overview

The COVID-19 Early Outbreak Dashboard is a web-based project that explores the early spread of COVID-19 between February and March 2020.

The dashboard focuses on five countries:

- China
- Italy
- South Korea
- United States
- South Africa

The purpose of this project is to understand how COVID-19 spread across different countries by looking at confirmed cases, deaths, recoveries and active cases.

## Project Objectives

The main objectives are to:

- Display COVID-19 statistics for different countries.
- Show confirmed cases, deaths and recoveries.
- Calculate active cases.
- Compare the spread of COVID-19 across countries.
- Visualise the data using charts.

## Technologies Used

- HTML – Creates the structure of the website.
- CSS – Styles the dashboard.
- JavaScript – Loads and processes the data.
- JSON – Stores the COVID-19 dataset.
- Chart.js – Planned for data visualisation.

## Project Structure

```text
covid-19-early-outbreak-dashboard/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── data/
│   └── covid-19.json
└── README.md
```

## Dataset

The dataset comes from the COVID-19 Data Repository by Johns Hopkins CSSE.

It contains selected observations between 1 February 2020 and 31 March 2020 for the five countries included in this project.

## Calculating Active Cases

Active cases are calculated using the following formula:

**Active Cases = Confirmed Cases - Deaths - Recoveries**

For example, South Africa's data on 31 March 2020:

- Confirmed cases: 1,353
- Deaths: 5
- Recoveries: 31

Calculation:

`1353 - 5 - 31 = 1317`

Therefore, South Africa had 1,317 active cases in the dataset on 31 March 2020.

## How to Run the Project

1. Clone or download this repository from GitHub.
2. Open the project folder in Visual Studio Code.
3. Install the Live Server extension if you do not already have it.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. The project will open in your web browser.

## Current Progress

- [x] Created the project structure.
- [x] Added the COVID-19 JSON dataset.
- [x] Loaded the JSON data using JavaScript.
- [x] Retrieved South Africa's data.
- [x] Identified the latest recorded observation.
- [x] Calculated active cases.
- [ ] Build dashboard statistic cards.
- [ ] Add country selection.
- [ ] Create data visualisation charts.
- [ ] Test the dashboard.

## Data Notes

The dataset contains selected observation dates rather than daily records for every day.

Changes between consecutive records should therefore be understood as increases over the recorded interval, not necessarily the number of new cases on a single day.

## Author

Noxolo Bojana

## Data Source

Johns Hopkins University Center for Systems Science and Engineering (CSSE).


