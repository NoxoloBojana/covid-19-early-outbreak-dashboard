
async function loadCovidData() {
    try {
        const response = await fetch("./data/covid-19.json");

        if (!response.ok) {
            throw new Error("Could not load COVID-19 data");
        }

        const covidData = await response.json();

        console.log(covidData);

    } catch (error) {
        console.error("Error:", error);
    }
}

loadCovidData();
