let inputCity = document.getElementById("input_city");
let search_icon = document.getElementById("search_icon");
let weatherIcon = document.getElementById("weather_icon");
let Cloudy = document.getElementById("cloudy");
let current_temp = document.getElementById("current_temp");
let city_name = document.getElementById("city_name");
let country = document.getElementById("country");
let detail_temp = document.getElementById("detail_temp");
let humidity = document.getElementById("humidity");
let wind_speed = document.getElementById("wind_speed");
let sunRise = document.getElementById("sunrise");
let sunSet = document.getElementById("sunset");

let background = document.getElementById("background");


let getCity = () => {
    let cityName = inputCity.value;
    let apiKey = "0ebb12e9335b4c5c02f802aa1709b8ab";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
    fetch(url)
        .then((response) => response.json())
        .then((json) => {

            let sunrise = new Date(json.sys.sunrise * 1000)
                .toLocaleTimeString()
                .slice(0, 5);
            let sunset = new Date(json.sys.sunset * 1000)
                .toLocaleTimeString()
                .slice(0, 5);

            current_temp.innerHTML = `${Math.floor(json.main.temp)}℃`
            weatherIcon.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
            weatherIcon.alt = `${json.weather[0].description}`
                // document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${json.name}`  //sucht passende Stadtbilder
            Cloudy.innerHTML = `${(json.weather[0].description).toUpperCase()}`
            city_name.innerHTML = `${json.name}   <i class="las la-map-marker"></i>`
            country.innerHTML = `${json.sys.country}`
            detail_temp.innerHTML = `${Math.floor(json.main.temp_max)}℃ / ${Math.floor(json.main.temp_min)}℃ feels like ${Math.floor(json.main.feels_like)}℃`
            humidity.innerHTML = `<i class="las la-tint"></i>  Humidity : ${json.main.humidity} %  `
            wind_speed.innerHTML = `<i class="las la-wind"></i>  Wind speed : ${json.wind.speed} m/s  `
            sunRise.innerHTML = `<i class="las la-sun"></i> Sunrise: ${sunrise} am`
            sunSet.innerHTML = `<i class="las la-moon"></i>  Sunset: ${sunset} pm`

            background.classList.add("main");

            if (json.weather[0].main === 'Clear') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1525490829609-d166ddb58678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80")';
            } else if (json.weather[0].main === 'Clouds') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")';
            } else if (json.weather[0].main === 'Rain') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")';
            } else if (json.weather[0].main === 'Mist') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1466226629899-41a4623ca86f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")';
            } else if (json.weather[0].main === 'Snow') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1507179938544-5e9eada02714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")';
            } else if (json.weather[0].main === 'Thunderstorm') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1509401934319-cb35b87bf39e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")';
            }
        });
};

search_icon.addEventListener("click", () => {
    window.onload = getCity();

    inputCity.value = "";
});
inputCity.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        window.onload = getCity();

        inputCity.value = "";
    }
});