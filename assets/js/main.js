const currentTemp = document.getElementById('outputCurrentTemp');
const feltTemp = document.getElementById('outputFeltTemp');
const minTemp = document.getElementById('outputMinTemp');
const maxTemp = document.getElementById('outputMaxTemp');
const sunrise = document.getElementById('outputSunrise');
const sunset = document.getElementById('outputSunset');
const humidity = document.getElementById('outputHumidity');
const windspeed = document.getElementById('outputWindspeed');

fetch('https://api.openweathermap.org/data/2.5/weather?q=düsseldorf&units=metric&appid=a7994a5462c685f3a891e561f51adae7')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log(json.name);
        currentTemp.innerHTML = (`Temperatur: ${json.main.temp.toFixed(1)} °C`);
        feltTemp.innerHTML = (`gefühlte Temperatur: ${json.main.feels_like.toFixed(1)
            } °C`);
        minTemp.innerHTML = (`Temperatur min: ${json.main.temp_min.toFixed(1)
            } °C`);
        maxTemp.innerHTML = (`Temperatur max: ${json.main.temp_max.toFixed(1)
            } °C`);
        const timeSunrise = new Date(json.sys.sunrise * 1000);
        if (timeSunrise.getMinutes() < 10) {
            sunrise.innerHTML = (`Sonnenaufgang: 0${timeSunrise.getHours()}:0${timeSunrise.getMinutes()} Uhr`);
        } else {
            sunrise.innerHTML = (`Sonnenaufgang: 0${timeSunrise.getHours()}:${timeSunrise.getMinutes()} Uhr`);
        }
        const timeSunset = new Date(json.sys.sunset * 1000);
        if (timeSunset.getMinutes() < 10) {
            sunset.innerHTML = (`Sonnenaufgang: 0${timeSunset.getHours()}:0${timeSunset.getMinutes()} Uhr`);
        } else {
            sunset.innerHTML = (`Sonnenuntergang: ${timeSunset.getHours()}:${timeSunset.getMinutes()} Uhr`);
        }
        humidity.innerHTML = (`Luftfeuchtigkeit: ${json.main.humidity}%`);
        windspeed.innerHTML = (`Windgeschwindigkeit: ${json.wind.speed.toFixed(1)} m/s`);
    })
    // let inputCity = document.getElementById("input_city");
    // let search_icon = document.getElementById("search_icon");
    // let wetterDisplay = document.getElementById("weather");
    // let icon = document.getElementById("icon");
    // let Cloudy = document.getElementById("cloudy");
    // let current_temp = document.getElementById("current_temp");
    // let city_name = document.getElementById("city_name");
    // let current_date_time = document.getElementById("current_date_time");
    // let country = document.getElementById("country");
    // let detail = document.getElementById("detail");
    // let detail_temp = document.getElementById("detail_temp");
    // let humidity = document.getElementById("humidity");
    // let wind_speed = document.getElementById("wind_speed");
    // let sunRise = document.getElementById("sunrise");
    // let sunSet = document.getElementById("sunset");
    // let cities_list = document.querySelector(".cities_list");
    // let list_display = document.querySelectorAll("#list_display");