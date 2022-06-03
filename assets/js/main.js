fetch('https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=a7994a5462c685f3a891e561f51adae7')
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
