var apiKey = config.MY_KEY;

//Query Selector
const iconEl = document.querySelector("#weather-icon");
const tempEl = document.querySelector("#temp-value p");
const descriptionEl = document.querySelector("#temp-description p");
const locationEl = document.querySelector("#location p");

//API Key
const key = apiKey;

function getWeather(){

    let inputValue = document.querySelector("#input-text").value 
    console.log(inputValue)

    const base = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}`

    fetch(base)
    .then((response) => response.json())
    .then((data) => {

        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.main.temp)
        console.log(data.weather[0].main)
        console.log(data.name);

        const { temp } = data.main;
        const { description, icon } = data.weather[0];  
        const location = data.name;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        const fahrenheit = (temp * 9) / 5 + 32;

        iconEl.src = iconUrl;
        descriptionEl.textContent = `${description}`;
        tempEl.textContent = `${fahrenheit}`;
        locationEl.textContent = `${location}`;

    });
}