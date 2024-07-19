document.getElementById("test").innerHTML="JavaScriptテスト";
console.log(document.getElementById("test"));

const weatherForm = document.getElementById("weather-form");

const cityInput = document.getElementById("city-input");

const weatherResults = document.getElementById("weather-results");

weatherForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  getWeather(cityInput.value);
})

const getWeather=(city)=>{
fetch("https://api.weatherapi.com/v1/current.json?key=baa5d787af7e497b964104158241807&q=${city}&aqi=no")
.then(response=>response.json())
.then(jsonData=>
weatherResults.innerHTML = `
      <div class="results-country">${jsonData.location.country}</div>
      <div class="results-city">${jsonData.location.name}</div>
      <div class="results-temp">${jsonData.current.temp_c}<span>°C</span></div>
      <div class="results-condition">
        <img src=${"https:"+jsonData.current.condition.icon } alt="icon">
        <span>${jsonData.current.condition.text}</span>
      </div>
    `);
}

