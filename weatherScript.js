let apiKey = "7da96e1cfdfd63d7d93d20d9bb3c8dcd";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temprature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humidity-info");
let windInfo = document.getElementById("wind-info");
let weatherImage = document.querySelector(".weather_img");

async function getWeatherData() {
    if ((userCity.value = "")) {
        alert("Enter a city name: ");
    } else {
        city = userCity.value;
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        let data = await response.json();
        ct.innerHTML = data.name;
        temprature.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        windInfo.innerHTML = data.wind.speed + "km/h";
        userCity.value = "";
        if (data.weather[0].main == "Clear") {
            weatherImage.src = "clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "drizzle.png";
        }
    }
}
