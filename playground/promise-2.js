const request = require('request');
require('dotenv').config();           // protect API keys, use env variables
const API_KEY_GEO = process.env.API_KEY_GEO

var geocodeAddress = (address) => {

  return new Promise ( ( resolve, reject ) => {

    request({
      //options
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY_GEO}`,
      json: true
    },
      //callback
      (e,r, body) => {
        if(e) reject(`Unable to connect to Google Servers`); 
        else if (body.status === `ZERO_RESULTS`) reject(`Unable to find that address`);
        else if (body.status === `OK`) resolve({
          address: body.results[0].formatted_address, 
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        })
      });

  });

}

geocodeAddress('134007')
.then( location => console.log(location) )
.catch( error => console.log(error) )
