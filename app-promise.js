const yargs = require('yargs');
const axios = require('axios');
require('dotenv').config();

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(`\nThe address that you're searching for: ${argv.address}`);

 
var geocodeURI = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}&key=${process.env.API_KEY_GEO}`;

axios.get(geocodeURI)
.then( response => {
    if(response.data.status === 'ZERO_RESULTS') throw new Error(`Unable to find that address`);
    
    console.log(`\nLocation Matched: ${response.data.results[0].formatted_address}\n`);

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    
    var weatherURLOWM = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.API_KEY_OWM}`;

    return axios.get(weatherURLOWM)     // go to the next 'then' block

})
.then( response => {
    const temp = response.data.main.temp - 273.15;
    const apparentTemp = response.data.main.feels_like - 273.15;
    console.log(`\nAccording to OWM, \nIt's currently ${temp.toFixed(2)} C. \nIt feels like ${apparentTemp.toFixed(2)} C though.\n`);
})
.catch( e => {
    if(e.code === 'ENOTFOUND') console.log(`Unable to connect to API servers.`)
    else console.log(e.message);
})


// possible upgrade
// add argument syntax to support different temp units and to choose which API they want weather from