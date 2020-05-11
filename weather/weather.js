const request = require('request');
require('dotenv').config();


// function to convert degree F to degree C
var FtoC = (num) => (num-32)*5/9 


// function to fetch weather data from OpenWeatherMap (OWM) API
var getWeatherOWM = (lat, lon, callback) => {
    
    request( 
    
    //options
    {
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY_OWM}`,
        json: true
    },
    //callback
    (error, response, body) => {

        if (!error && response.statusCode === 200) {
            callback(undefined, {
              temperature: (body.main.temp -273.15),             // temperature converted to degree C from Kelvin
              apparentTemperature: (body.main.feels_like - 273.15)
            });
          } else callback('Unable to fetch weather.');

    }
    
    );

}

module.exports = {
    getWeatherOWM
  }
  
  