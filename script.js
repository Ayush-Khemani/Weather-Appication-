const url = "https://api.api-ninjas.com/v1/weather?city=";
const api_key = "FRssRj62wEDr+6dutOszqw==YA04DTrMVVxd0C1c";


let city = 'Budapest';

window.addEventListener("load", fetchdata("Budapest"));

const searchInput = document.getElementById("search-input");
const seachButton = document.getElementById("Search-button");

searchInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        const query = searchInput.value;
        fetchdata(query);
    }
})

seachButton.addEventListener("click", () => {
    const query = searchInput.value;
    fetchdata(query);
})


async function fetchdata(city) {
    const data = await fetch(`${url}${city}`, {
        method: 'GET',
        headers: { 'X-Api-Key': "FRssRj62wEDr+6dutOszqw==YA04DTrMVVxd0C1c" },
        contentType: 'application/json',
    });

    const response = await data.json()

    console.log(response);
    BindData(response, city);

}

function BindData(response, city) {

    const card = document.getElementById("card");
    const weatherDisplay = document.getElementById("wheather-display");

    fillData(card, response, city);
    weatherDisplay.appendChild(card);
}


function fillData(card, response, city) {

    const name = document.getElementById("city-name");
    name.innerHTML = city;
    const temperature = document.getElementById("city-temp");
    temperature.innerHTML = response.temp + "°C";

    const feelsLike = document.getElementById("Feels-Like");
    const humidity = document.getElementById("Humidity");
    const windSpeed = document.getElementById("Wind-Speed");

    feelsLike.innerText = "Feels-Like:" + "   " + response.feels_like + "°C";
    humidity.innerText = "Humidity:" + "    " + response.humidity + "%";
    windSpeed.innerText = "Wind-Speed:" + "   " + response.wind_speed + " mph";

    const minTemp = document.getElementById("min-temp");
    const maxTemp = document.getElementById("max-temp");
    const windDeg = document.getElementById("wind-degree");

    minTemp.innerText = "Min-Temp:" + "   " + response.min_temp + "°C";
    maxTemp.innerText = "Max-Temp:" + "   " + response.max_temp + "°C";
    windDeg.innerText = "wind-Deg:" + "   " + response.wind_degrees;

    const sunSet = document.getElementById("sunset");
    const sunRise = document.getElementById("sunrise");
    const cloudPct = document.getElementById("cloud_pct");

    sunSet.innerText = "sun-set:" + "   " + response.sunset;
    sunRise.innerText = "sun-Rise:" + "   " + response.sunrise;
    cloudPct.innerText = "cloud-Pct:" + "   " + response.cloud_pct;

}

// const clone = template.firstElementChild.cloneNode(true);
// console.log(clone);