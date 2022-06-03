fetch('api.openweathermap.org/data/2.5/weather?id=524901&appid=261b9b1fdaf8ef2a290cd529e386ccbb')
    .then(response => response.json())
    .then(json => {
        console.log(json);


    })
