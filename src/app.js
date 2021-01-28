let apiKey = "4cea025489823b86da62835c695c95d3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

function displayCity(response) {
  console.log(response.data);
  let forecast = document.querySelector("#weather-description");
  forecast.innerHTML = response.data.weather[0].description;

  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);

  let weatherIcon = document.querySelector("#weather-icon");
  weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

axios.get(apiUrl).then(displayCity);

