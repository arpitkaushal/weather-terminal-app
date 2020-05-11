const request = require('request'); // to make requests to HTTP
require('dotenv').config();         // to protect my personal API Key


var geocodeAddress = (address, callback) => {

    request({
    
    //options
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.API_KEY_GEO}`,
    json: true
    },

    //callback
    (error, response, body ) => {

        //errors related to the process of making that HTTP request. 
        if(error) callback(`Unable to connect to google.`);
        else if(body.status === 'ZERO_RESULTS') callback(`Unable to find that address`);
        else if (body.status === 'OK') {    
            callback( undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
}


module.exports = {
    geocodeAddress
}



// API Call Geocoding API (Google) - https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}