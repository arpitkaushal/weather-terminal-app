const yargs = require('yargs');         // parse user input
const axios = require('axios');         // make http requests, promise based
require('dotenv').config();             // protect API keys 

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,                           // has to be a string
      requiresArg: true                       // string cannot be empty
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(`\nThe address that you're searching for: ${argv.address}`);

// encode the search term by taking care of spaces, and fit it in the URL that geocode api expects
var geocodeURI = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}&key=${process.env.API_KEY_GEO}`;

axios.get(geocodeURI)
.then( response => {
    
  // taking care of common (and known) errors
  // custom error messages, more comprehensive
  if(response.data.status === 'ZERO_RESULTS') 
    throw new Error(`Unable to find that address`);       
  else if(response.data.status === 'REQUEST_DENIED') 
    throw new Error(`Your Geocode API Key isn't valid, or it hasn't been enabled.`);  
  
  // display formatted address as returned by google
  console.log(`\nLocation Matched: ${response.data.results[0].formatted_address}\n`);
  
  // getting latitude and longitude
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  
  // fixing the lat and lng to the OWM API URL
  var weatherURLOWM = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.API_KEY_OWM}`;
  
  // requesting OWM report
  return axios.get(weatherURLOWM)     // go to the next 'then' block (chaining promises)

})
.then( response => {
  
  // getting temp and apparent temp from the json data
  const temp = response.data.main.temp - 273.15;                // from kelvin to degree C
  const apparentTemp = response.data.main.feels_like - 273.15;  // from kelvin to degree C
  console.log(`\nAccording to OWM, \nIt's currently ${temp.toFixed(2)} C. \nIt feels like ${apparentTemp.toFixed(2)} C though.\n`);

})
.catch( e => {
    if(e.code === 'ENOTFOUND') console.log(`Unable to connect to API servers.`) // if not able to reach web servers
    else console.log(e.message);                                                // logging misc errors as they pop up
})


// possible upgrade
// add argument syntax to support different temp units