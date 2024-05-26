//https://api.openweathermap.org/data/2.5/weather?q=London&appid=bc357cae2e531351d54ccd326ba34e0d

const apiKey="bc357cae2e531351d54ccd326ba34e0d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=Ghent";

async function checkWeather(params) {
    const response= await fetch(apiUrl+`&appid=${apiKey}`);
    var data=await response.json();
    //onderstaande is om alle data te tonen in de console 
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp;
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed;
}
checkWeather();