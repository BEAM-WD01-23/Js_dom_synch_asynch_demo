//fetch url and show sample data
    //
    // let URL = ('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=47e77e0353a9da6a082986301c3e0593');
    // fetch(URL)
    // .then(res=>res.json())
    // .then(result =>{
    //     console.log(result);
    //     const Humidity = document.getElementById('humidity');
    //     const Country = document.getElementById('country');
    //     const City = document.getElementById('cityName');
    //     //
    //     Humidity.innerHTML = result.main.humidity;
    //     Country.innerHTML = result.sys.country;
    //     City.innerHTML = result.name;
    // })
    // .catch(err=>{
    //     console.log(err);
    // })
    //
// dynamic fetching data and show it on the DOM
    //
    const myBtn = document.getElementById('btn');
    myBtn.addEventListener('click', showWeather);

    function showWeather(){
        //console.log('clicked');
    const cityInput = document.getElementById('cityInput');
    const insertCityName = cityInput.value;
        //console.log(insertCityName);
        if(insertCityName.length === ''){
            alert('please insert name of the city!')
        }else{//chage the url to allow users insert city ...
            const myKey = 'secret key';
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${insertCityName}&appid=${myKey}&units=metric`
            console.log(URL);
            fetch(URL)
            .then(res=>res.json())
            .then(result =>{
               // console.log(result);
           
               //
                const Icon = document.getElementById('icon');
                const Humidity = document.getElementById('humidity');
                const Country = document.getElementById('country');
                const City = document.getElementById('cityName');
                const WeatherDescription = document.getElementById('weatherDescription');
                const Wind = document.getElementById('wind')
                const HighTemp = document.getElementById('highTemp')
                const FeelsLike = document.getElementById('feelsLike')
                //
                Icon.innerHTML = `<img src="http://openweathermap.org/img/w/${result.weather[0].icon}.png"/>`;
                WeatherDescription.innerHTML = 'Weather Description: ' + result.weather[0].description;
                Humidity.innerHTML = 'Humidity: ' + result.main.humidity + '%';
                Country.innerHTML = 'Country: ' + result.sys.country;
                City.innerHTML = 'City: ' + result.name;
                Wind.innerHTML = 'Wind Speed: ' + result.wind.speed + 'kph';
                HighTemp.innerHTML = 'Max-Temp: ' + result.main.temp_max + 'ºC';
                FeelsLike.innerHTML = 'Feels-Like: ' + result.main.feels_like + 'ºC';
                //
              

            })
        }
    }
