
async function loadCovidData() {
    try {
        // Load the COVID-19 JSON file
        const response = await fetch("./data/covid-19.json");

        if (!response.ok) {
            throw new Error("Could not load COVID-19 data");
        }

        const covidData = await response.json();

        console.log("All COVID-19 data:", covidData);

        // Get the country selector
        const countrySelect = document.getElementById("country-select");

        // Create variables to store our charts
        let covidLineChart;
        let covidBarChart;

        // Create a function to update the dashboard
        function updateDashboard() {

            // Get the selected country
            const selectedCountry = countrySelect.value;

            console.log("Selected country:", selectedCountry);

            // Find the selected country in the dataset
            const countryData = covidData.countries.find(
                country => country.country === selectedCountry
            );

            console.log("Country data:", countryData);

            // Get the latest record
            const latestRecord = countryData.data[
                countryData.data.length - 1
            ];

            console.log("Latest record:", latestRecord);

            // Calculate active cases
            const activeCases =
                latestRecord.confirmed -
                latestRecord.deaths -
                latestRecord.recovered;

            // Display confirmed cases
            const confirmedCasesElement =
                document.getElementById("confirmed-cases");

            confirmedCasesElement.textContent = latestRecord.confirmed;

            // Display deaths
            const deathsElement =
                document.getElementById("deaths");

            deathsElement.textContent = latestRecord.deaths;

            // Display recoveries
            const recoveriesElement =
                document.getElementById("recoveries");

            recoveriesElement.textContent = latestRecord.recovered;

            // Display active cases
            const activeCasesElement =
                document.getElementById("active-cases");

            activeCasesElement.textContent = activeCases;

            // Get the line chart area
            const chartCanvas = document.getElementById("covidLineChart");

            // Prepare the dates for the charts
            const dates = countryData.data.map(record => record.date);

            // Prepare confirmed cases data
            const confirmedCases = countryData.data.map(
                record => record.confirmed
            );

            // Prepare deaths data
            const deaths = countryData.data.map(
                record => record.deaths
            );

            // Prepare recoveries data
            const recoveries = countryData.data.map(
                record => record.recovered
            );

            // Calculate increases in confirmed cases
            const newCases = countryData.data.map((record, index) => {

                // The first record has no previous date to compare with
                if (index === 0) {
                    return 0;
                }

                // Get the previous record
                const previousRecord = countryData.data[index - 1];

                // Calculate the increase in confirmed cases
                return record.confirmed - previousRecord.confirmed;
            });

            console.log("Increases between recorded dates:", newCases);

            // Remove the previous line chart
            if (covidLineChart) {
                covidLineChart.destroy();
            }

            // Create the line chart
            covidLineChart = new Chart(chartCanvas, {
                type: "line",

                data: {
                    labels: dates,

                    datasets: [
                        {
                            label: "Confirmed Cases",
                            data: confirmedCases,
                            borderColor: "blue",
                            backgroundColor: "rgba(0, 0, 255, 0.1)",
                            tension: 0.3
                        },
                        {
                            label: "Deaths",
                            data: deaths,
                            borderColor: "red",
                            backgroundColor: "rgba(255, 0, 0, 0.1)",
                            tension: 0.3
                        },
                        {
                            label: "Recoveries",
                            data: recoveries,
                            borderColor: "green",
                            backgroundColor: "rgba(0, 128, 0, 0.1)",
                            tension: 0.3
                        }
                    ]
                },

                options: {
                    responsive: true,

                    plugins: {
                        legend: {
                            display: true
                        }
                    },

                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: "Number of Cases"
                            }
                        },

                        x: {
                            title: {
                                display: true,
                                text: "Date"
                            }
                        }
                    }
                }
            });

            // Get the bar chart area
            const barChartCanvas =
                document.getElementById("covidBarChart");

            // Remove the previous bar chart
            if (covidBarChart) {
                covidBarChart.destroy();
            }

            // Create the bar chart
            covidBarChart = new Chart(barChartCanvas, {
                type: "bar",

                data: {
                    labels: dates,

                    datasets: [
                        {
                            label: "Increase Since Previous Recorded Date",
                            data: newCases,
                            backgroundColor: "rgba(54, 162, 235, 0.7)",
                            borderColor: "blue",
                            borderWidth: 1
                        }
                    ]
                },

                options: {
                    responsive: true,

                    plugins: {
                        legend: {
                            display: true
                        }
                    },

                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: "Increase in Confirmed Cases"
                            }
                        },

                        x: {
                            title: {
                                display: true,
                                text: "Recorded Date"
                            }
                        }
                    }
                }
            });
        }

        // Update the dashboard when the country changes
        countrySelect.addEventListener("change", updateDashboard);

        // Display the default selected country
        updateDashboard();

    } catch (error) {
        console.error("Error:", error);
    }
}

// Run the function
loadCovidData();









