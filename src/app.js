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
  "Clouds",
  "Thunderstorm",
  "Drizzle",
  "Rain",
  "Snow",
  "Mist",
  "Smoke",
  "Haze",
  "Dust",
  "Fog",
  "Sand",
  "Ash",
  "Squall",
  "Tornado",
];

let colors = [
  "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
  "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
];

function displayCity(response) {
  let forecast = document.querySelector("#weather-description");
  forecast.innerHTML = response.data.weather[0].description;

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

  let colorBackground = document.querySelector("div");
  if (response.data.weather[0].main === "Clear") {
    //document.getElementsByClassName('card').style.backgroundImage = colors[1];
    colorBackground.style.backgroundImage = colors[0];
  } else {
    colorBackground.style.backgroundImage = colors[1];
  }
}

search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
