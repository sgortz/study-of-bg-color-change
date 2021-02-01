let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();

if (minutes.toString().length == 1) {
  minutes = "0" + minutes;
}

let smallHeading = document.querySelector("h2");
smallHeading.innerHTML = `${hour}:${minutes}`;

// Updating the temperature and icon from page
function handleSubmit(event) {
  event.preventDefault();
  console.log(document.div);
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function search(cityName) {
  let apiKey = "4cea025489823b86da62835c695c95d3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayCity);
}

let forecast = [
  "Clear",
  "Smoke",
  "Clouds",
  "Haze",
  "Mist",
  "Fog",
  "Drizzle",
  "Rain",
  "Snow",
  "Ash",
  "Dust",
  "Sand",
  "Thunderstorm",
  "Tornado",
  "Squall",
];

let colors = [
  //clear sky daylight
  "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
  //clear sky nighttime -- font color whitesmoke
  "linear-gradient(to top, #09203f 0%, #537895 100%)",
  //rainy or cloudy
  "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
  //sand, Dust
  "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);",
  //thunderstorm
  "linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)",
  // Morning
  "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
];

function displayCity(response) {
  console.log(response.data.weather[0].main);
  console.log(forecast[2]);
  let forecastElement = document.querySelector("#weather-description");
  forecastElement.innerHTML = response.data.weather[0].description;

  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);

  let weatherIcon = document.querySelector("#weather-icon");
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", response.data.weather[0].description);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}, ${response.data.sys.country}`;

  let apiIconResponse = response.data.weather[0].icon;
  let colorBackground = document.querySelector("div");
  if (apiIconResponse.includes("n")) {
    colorBackground.style.backgroundImage = colors[1];
    colorBackground.style.color = "whitesmoke";
  } else if (response.data.weather[0].main === forecast[0] && hour < 12) {
    colorBackground.style.backgroundImage = colors[5];
  } else if (response.data.weather[0].main === forecast[0] && hour >= 12) {
    colorBackground.style.backgroundImage = colors[0];
  } else if (response.data.weather[0].main === forecast[(10, 11)]) {
    colorBackground.style.backgroundImage = colors[3];
  } else if (response.data.weather[0].main === forecast[(12, 13)]) {
    colorBackground.style.backgroundImage = colors[4];
  } else {
    colorBackground.style.backgroundImage = colors[2];
  }
}

search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
