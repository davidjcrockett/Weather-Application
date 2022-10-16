var apiKey = localStorage.getItem("apiKey");
  if (!apiKey) {
    apiKey = prompt("Enter Your Free API Key from OpenWeatherMap:");
    var apiKey = localStorage.setItem("apiKey", apiKey);
  }

const api = apiKey;

//Query Selector
const iconEl = document.querySelector("#weather-icon");
const tempEl = document.querySelector("#temp-value p");
const descriptionEl = document.querySelector("#temp-description p");
const locationEl = document.querySelector("#location p");

//API Key
const key = api;

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
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        const fahrenheit = ((temp - 273.16) * 1.8) + 32;

        iconEl.src = iconUrl;
        descriptionEl.textContent = `${description}`;
        tempEl.textContent = `${fahrenheit.toFixed(2)} °F`;
        locationEl.textContent = `${location}`;

    });
}

let arr = [98, 45, 78, 9, 0];
 
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

console.log("----------------")

function map (x, y) {
    const result = [];
    for (let i = 0; i < y.length; i++) {
        result[i] = x(y[i]);
    } 
    return result;
}

const x = function (y) {
    return y + 10;
}

const numbers = [98, 45, 78, 9, 0];
const plusTen = map(x, numbers);
console.log(plusTen);