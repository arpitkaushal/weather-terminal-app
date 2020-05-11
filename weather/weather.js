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

//function to fetch weather data from DARK SKY API
var getWeatherDARK = (lat, lon, callback) => {
    
    request( 
    
    //options
    {
        url: `https://api.darksky.net/forecast/${process.env.API_KEY_DARK}/${lat},${lon}`,
        json: true
    },
    
    //callback
    (error, response, body) => {

            if (!error && response.statusCode === 200) {
              callback(undefined, {
                temperature: FtoC(body.currently.temperature),                  // temperature converted to degree C from degree F
                apparentTemperature: FtoC(body.currently.apparentTemperature)   
              });
            } else callback('Unable to fetch weather.');

        }
    );

}


module.exports = {
    getWeatherDARK,
    getWeatherOWM
  }
  
  