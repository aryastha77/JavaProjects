
const apiKey = "d160396525e2837ac110b88447444ecc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputValue = document.querySelector(".searchEngine input");
const clickBtn = document.getElementById("searchBtn");
const weatherImage = document.querySelector(".image");


async function weatherFetch(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {

        document.querySelector(".error").style.display = "block";
        document.querySelector(".weatherContent").style.display = "none";
    }
    else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".des").innerHTML = data.weather[0].description;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        if (data.weather[0].main == "Clear") {
            weatherImage.src = "clear.png";
        }
        else if (data.weather[0].main == "Clouds") {
            weatherImage.src = "cloudy.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherImage.src = "mist.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherImage.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "lightRain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherImage.src = "snow.png";
        }
        else if (data.weather[0].main == "Storm") {
            weatherImage.src = "storm.png";
        }

        document.querySelector(".weatherContent").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    }

}
weatherFetch("Birgunj")

clickBtn.addEventListener("click", () => {
    weatherFetch(inputValue.value);
})