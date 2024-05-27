const apiKey = "bc357cae2e531351d54ccd326ba34e0d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data); // Log all data to the console for debugging
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        switch (data.weather[0].main) {
                case "Clouds":
                weatherIcon.src="images/clouds.png";
                break;
                case "Rain":
                    weatherIcon.src="images/rain.png";
                break;
                case "Drizzle":
                        weatherIcon.src="images/drizzle.png";
                break;
                case "Mist":
                        weatherIcon.src="images/mist.png";
                break;
                case "Clear":
                        weatherIcon.src="images/clear.png";
                break;
            default:
                break;
        }
   document.querySelector(".weather").style.display="block"
    
    
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to retrieve weather data. Please try again.');
    }
}

searchBtn.addEventListener("click", () => {
    if (searchBox.value.trim() !== "") {
        checkWeather(searchBox.value.trim());
    } else {
        alert('Please enter a city name');
    }
});
