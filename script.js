var apiKey = config.MY_KEY;

//Query Selector
const iconEl = document.querySelector("#weather-icon");
const tempEl = document.querySelector("#temp-value p");
const descriptionEl = document.querySelector("#temp-description p");
const locationEl = document.querySelector("#location p");

// API Call from OpenWeather: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// Data example from entering Seattle's latitude/longitude in URL
// {"coord":{"lon":-122.3321,"lat":47.6062},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"}],"base":"stations","main":{"temp":295.47,"feels_like":295.12,"temp_min":291.87,"temp_max":299.31,"pressure":1015,"humidity":52},"visibility":8047,"wind":{"speed":2.57,"deg":0},"clouds":{"all":0},"dt":1665705015,"sys":{"type":2,"id":2041694,"country":"US","sunrise":1665671112,"sunset":1665710731},"timezone":-25200,"id":5809844,"name":"Seattle","cod":200}

// //Temporary, will delete once I get geolocation running
// let latitude = 47.6062
// let longitude = -122.3321

//API Key
const key = apiKey;

function getWeather(){

    let inputValue = document.querySelector("#input-text").value 
    console.log(inputValue)

    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}`

    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {

        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.main.temp)
        console.log(data.weather[0].main)
        console.log(data.name);

    });
}