const apiKey = "84cbf591308154901e172e1545ce46a7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const main = document.querySelector(".main");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&units=metric&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
     
    if (data.weather[0].main == 'Clouds'){
     weatherIcon.src = "images/clouds.png"
     main.textContent = "Clouds"
    }
    else if (data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png"
        main.textContent = "Clear"
       }
       else if (data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png"
        main.textContent = "Drizzle"
       }
       else if (data.weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png"
        main.textContent = "Mist"
       }
       else if (data.weather[0].main == 'Snow'){
        weatherIcon.src = "images/snow.png"
        main.textContent = "Snow"
       }
       else if (data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png"
        main.textContent = "Rain"
       }
       else if (data.weather[0].main == 'Smoke'){
        weatherIcon.src = "images/smoke.png"
        weatherIcon.style.height = "180px"
        main.textContent = "Smoke"
       }

       
}
$(":button").click(function () {
    checkWeather($(":input").val());
    searchBox.value = '';
})












