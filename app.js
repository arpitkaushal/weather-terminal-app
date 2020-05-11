const yargs = require('yargs');                 // for parsing input from command line
const request = require('request');             // for making HTTPS requests

const geocode = require('./geocode/geocode');   // fetches coordinates from search keywords
const weather = require('./weather/weather')    // fetches weather details from coordinates

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;
console.log(`\nThe address that you're searching for: ${argv.address}`);


geocode.geocodeAddress(argv.address, (errorMessage, result) => {        // address is input into the function, 'result' is a property of the callback's return value
    
    if(errorMessage) console.log(errorMessage);
    else {
        console.log(`\nLocation Matched: ${result.address}\n`);                                                        // result contains location data corresponding to the search

        weather.getWeatherOWM( result.latitude, result.longitude, (err, weatherResult) => {                            // err and weatherResult are properties of callback 
            if(err) console.log(err);                                  
            else console.log(`\nAccording to OWM, \nIt's currently ${weatherResult.temperature.toFixed(2)} C.`+        //weatherResult contains weather data corresponding to the location
                            `\nIt feels like ${weatherResult.apparentTemperature.toFixed(2)} C though.\n`)
        })

        // weather.getWeatherDARK( result.latitude, result.longitude, (err, weatherResult) => {                           // err and weatherResult are properties of callback 
        //     if(err) console.log(err);                                  
        //     else console.log(`\nAccording to DARK, \nIt's currently ${weatherResult.temperature.toFixed(2)} C.`+       //weatherResult contains weather data corresponding to the location
        //                     `\nIt feels like ${weatherResult.apparentTemperature.toFixed(2)} C though.\n`)
        // })


    }

});


var FtoC = (num) => (num-32)*5/9 






// API Call OpenWeatherMap https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={API_KEY_OWM}
// API Call Dark Weather https://api.darksky.net/forecast/${API_KEY_DARK}/${latitude},${longitude}
