fetch("https://api.openweathermap.org/data/2.5/weather?q=New york&units=metric&appid=d4403f843252cc8a6edf1da45d80985f") 

    // Convert response string to json object
    .then(response => response.json())
    .then(response => {
        
        console.log(response); // Display whole API response in browser console
        // Data from the openweather API is used to feed live weather data into respective id's
        document.getElementById("humidity").innerHTML = response.main.humidity + ('%') 
        document.getElementById("description").innerHTML = response.weather[0].description 
        document.querySelector('#img').src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png` // Realtime weather icon pulled from openweather API and loaded to id: img
        document.getElementById("wind").innerHTML = response.wind.speed + (' m/s') 
        document.getElementById("temp").innerHTML = response.main.temp + ('°C') 
        document.getElementById("pressure").innerHTML = response.main.pressure + (' hPa') 
        document.getElementById("WindDirection").innerHTML = response.wind.deg + ('°')
    })
    .catch(err => {
        // Display errors in the console
        console.log(err);
    }); 