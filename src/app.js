let apiKey = "4cea025489823b86da62835c695c95d3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}`;

function displayCity(response) {
  console.log(response.data);
}

axios.get(apiUrl).then(displayCity); 

/* function searchCity(event) {
    let form = document.querySelector("#search-form");
    
    
    function search(event){
        event.preventDefault();
        let searchInput = document.querySelector("#city-input");
        console.log(searchInput.value);
    }
    
    
    form.addEventListener("submit", search);
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  return(searchInput.value);
}

//let h1 = document.querySelector("h1");
//h1.innerHTML = `${searchInput.value}`

let form = document.querySelector("#search-form");
  
  form.addEventListener("submit", searchCity);
  

let cityName = searchCity();

*/
