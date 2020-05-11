This is a simple Weather App built on Node.js without a GUI. It can be run via command line. \
You enter an address and the app fetches temperature of that place. 

># System Prerequisities 

    Node.js and npm 

># Setting up the app 
1. Clone the repo on your system locally. 
2. Open a terminal at the root of the project. 
3. Run \
`npm install` 
4. This will install the dependencies.
5. In the root folder, open the file `.env1` You need to edit the dummy `API Keys` with **your own** *API Keys* . 
    1. Set `API_KEY_GEO = < Geocode API Key >` 
    2. Set `API_KEY_OWM = < Current Weather Map API Key >` \
    You can get your API Key [here](https://openweathermap.org/current). (Sign up Required)
    3. *Optional* 
        1. Dark Sky API is no longer accepting new sign ups, so, if you don't have a Dark Sky API account don't bother. 
        2. In case you are an existing user, replace the dummy key with your API Key.
        3. Make sure to uncomment the function call to `getWeatherDARK` in the file `app.js`       
6. Now rename the file from `.env1` to `.env`   \
And the app is ready.


> # Test the App

Run the following command (from root of the project, in terminal) to test the app.

    `node app.js -a 'New Delhi, India'` \

You should get the output in folowing format - 

    The address that you're searching for: New Delhi, India

    Location Matched: New Delhi, Delhi, India

    According to OWM,
    It's currently 29.00 C.
    It feels like 28.80 C though.


> **Note** : 
To set up Geocode API you'll have to set up a billing account at Google Cloud Console (as part of a project). They give 200 USD in credits every month, which is more than sufficient for the purpose of trying (and tinkering with) this app. 


># Sample Commands
After you've tested the app as instructed above, you can try variants of the commands given  below.

Search by PIN Code 
    
    node app.js -a 132001       // fetches result as expected
    node app.js -a 000001       // try this out :P

Search by Street Address 

    node app.js -a 'Tagore Garden, Baldev Nagar'


