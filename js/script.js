
async function loadCovidData() {
    try {
        // Load the COVID-19 JSON file
        const response = await fetch("./data/covid-19.json");

        if (!response.ok) {
            throw new Error("Could not load COVID-19 data");
        }

        const covidData = await response.json();

        console.log("All COVID-19 data:", covidData);

        // Find South Africa in the dataset
        const southAfrica = covidData.countries.find(
            country => country.country === "South Africa"
        );

        console.log("South Africa:", southAfrica);

        // Get the latest record
        const latestRecord = southAfrica.data[southAfrica.data.length - 1];

        console.log("Latest record:", latestRecord);

        // Display the latest numbers
        console.log("Confirmed:", latestRecord.confirmed);
        console.log("Deaths:", latestRecord.deaths);
        console.log("Recovered:", latestRecord.recovered);

        // Calculate active cases
        const activeCases =
            latestRecord.confirmed -
            latestRecord.deaths -
            latestRecord.recovered;

        console.log("Active cases:", activeCases);

        const confirmedCasesElement = document.getElementById("confirmed-cases");

        confirmedCasesElement.textContent = latestRecord.confirmed; 

    } catch (error) {
        console.error("Error:", error);
    }
}

// Run the function
loadCovidData();
