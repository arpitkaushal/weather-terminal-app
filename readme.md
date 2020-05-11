This is a simple Weather App built on Node.js without a GUI. It can be run via **command line**. 
### You enter an address and the app fetches temperature of that place. 

I've implemented two versions of the same app. \
**Callbacks Version** - Executes via the traditional callback functions feature of Node. \
**Promise Version** - Executes via Promises which have been added to core Node as part of the **ES6** upgrade. 

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
6. Now rename the file from `.env1` to `.env`   \
And the app is ready.


> # Test the App
There are (sort of) two vesions of this app. 
Run the following command (from root of the project, in terminal) to test the app.

    node app-callbacks.js -a 'New Delhi, India'
    node app-promise.js -a 'New Delhi, India'

You should get the output in folowing format for both versions - 

    The address that you're searching for: New Delhi, India

    Location Matched: New Delhi, Delhi, India

    According to OWM,
    It's currently 29.00 C.
    It feels like 28.80 C though.


# Sample Commands
After you've tested the app as instructed above, you can try variants of the commands given  below.

>## Callback Version
Search by PIN Code 
    
    node app-callbacks.js -a 132001       // fetches result as expected
    node app-callbacks.js -a 000001       // try this out :P

Search by Street Address 

    node app-callback.js -a 'Tagore Garden, Baldev Nagar'

>## Promise Version
Search by PIN Code 
    
    node app-promise.js -a 134007       // fetches result as expected
    node app-promise.js -a 000001       // try this out :P

Search by Street Address 

    node app-promise.js -a 'Prayagraj'

>## **Note** :
1. To set up Geocode API you'll have to set up a billing account at Google Cloud Console (as part of a project). They give 200 USD in credits every month, which is more than sufficient for the purpose of trying (and tinkering with) this app.
2. There's a directory `playground` in the root of folder. It contains files that aren't related to the app but they helped in understanding the implementation of some features crucial to the app.  

>### Contribute to the App. Hit me up on github if you have some suggestions!