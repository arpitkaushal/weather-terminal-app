const request = require('request');   // make http request
require('dotenv').config();           // protect API keys, use env variables


// function to convert degree F to degree C
var FtoC = (num) => (num-32)*5/9 


// function to fetch weather data from OpenWeatherMap (OWM) API
var getWeatherOWM = (lat, lon, callback) => {
    
    request( 
    
    // options
    {
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY_OWM}`,
        json: true
    },

    // handling callback objects of request function
    (error, response, body) => {
        // pass (null, result object with apt properties) to callback
        if (!error && response.statusCode === 200) {
            callback( null, {
              temperature: (body.main.temp -273.15),             // temperature from Kelvin to degree C
              apparentTemperature: (body.main.feels_like - 273.15)
            });
          } else callback('Unable to fetch weather.');

    }
    
    );

}

module.exports = {
    getWeatherOWM
  }
  
  