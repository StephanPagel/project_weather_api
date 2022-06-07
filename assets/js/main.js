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