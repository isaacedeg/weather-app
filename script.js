async function checkWeather(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=2616ac9eff494d23d2c029c2e547c835&units=metric");
    const data = await response.json();
    console.log(data);
    document.querySelector("#delu").innerHTML = data.weather[0].description;
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector("#visibility").innerHTML = Math.round((data.visibility)/1000) + "km";
}
checkWeather();