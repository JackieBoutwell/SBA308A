// import axios from "axios";

// The get submit button element.
// const submitBtn = document.getElemnetById("search")


// Step 0: Store your API key here for reference and easy access.
// const API_KEY= "A0eLxjDMQC919yA8VukwvzicrL5uZqGk";
// location-key "324597";

// const url = "https://api.thecatapi.com/v1/breeds";
// axios.defaults.headers.common["x-api-key"] = API_KEY

// const currentConditions = async (zipCode) => {
//     const response = axios.get(
//         // example
//         //     https://dataservice.accuweather.com/currentconditions/v1/324597?apikey=A0eLxjDMQC919yA8VukwvzicrL5uZqGk&
//       `http://dataservice.accuweather.com/locations/v1/postalcodes/search?q=${zipCode}`
//     );
//     const data = response.data
//     const locationKey = data.key;

//     const ConditionsCurrently = axios.get(
//         //example
//         //https://dataservice.accuweather.com/locations/v1/cities/search?apikey=A0eLxjDMQC919yA8VukwvzicrL5uZqGk&q=boston
//         `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`
//     );

//     console.log('current conditions ', currentCoditions)

// }


// this is coming back no errors

// const currentConditions = async (zipCode) => {
//   try {
//     const response = await fetch(
//       `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=A0eLxjDMQC919yA8VukwvzicrL5uZqGk&q=${zipCode}`
//     );
//     const data = await response.json();
//     console.log('location data ', data[0].Key);


//     console.log(response.json)
      
//     const locationKey = data[0].Key;
//     console.log(locationKey);

//     const currentCoditions = await fetch(
//       `http://dataservice.accuweather.com/currentconditions/v1/$324597`
//     );

//     console.log('current conditions ', currentCoditions);
//   } catch (error) {
//     console.log('error ', error);
//   }
// };

// const zip = prompt('Whats your zipcode');

// currentConditions(zip);

//axios

// const axios = require('axios');

// const currentConditions = async (zipCode) => {
//   try {
//     const response = await axios.get(
//       `http://dataservice.accuweather.com/locations/v1/postalcodes/search?q=${zipCode}`,
//       {
//         headers: {
//           'x-api-key': 'wDZvrcyGZGawxdHModUXQpIAGG6cDHps',
//         },
//       }
//     );
//     const data = response.data;

//     const locationKey = data.key;

//     const currentCoditions = await axios.get(
//       `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
//       {
//         headers: { 'x-api-key': 'wDZvrcyGZGawxdHModUXQpIAGG6cDHps' },
//       }
//     );

//     console.log('current conditions ', currentCoditions);
//   } catch (error) {
//     console.log('error ', error);
//   }
// };

// const zip = prompt('Whats your zipcode');

// currentConditions(zip);



//fetch

// const currentConditions = async (zipCode) => {
//   try {
//     const response = await fetch(
//       `http://dataservice.accuweather.com/locations/v1/postalcodes/search?q=${zipCode}`,
//       {
//         headers: {
//           'x-api-key': 'wDZvrcyGZGawxdHModUXQpIAGG6cDHps',
//         },
//       }
//     );
//     const data = response.data;

//     const locationKey = data.key;

//     const currentCoditions = await fetch(
//       `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
//       {
//         headers: { 'x-api-key': 'wDZvrcyGZGawxdHModUXQpIAGG6cDHps' },
//       }
//     );

//     console.log('current conditions ', currentCoditions);
//   } catch (error) {
//     console.log('error ', error);
//   }
// };

// const zip = prompt('Whats your zipcode');

// currentConditions(zip);



const currentConditions = async (zipCode) => {
  try {
    const headers = new Headers({
      'x-api-key': 'A0eLxjDMQC919yA8VukwvzicrL5uZqGk',
    });
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=wDZvrcyGZGawxdHModUXQpIAGG6cDHps&q=${zipCode}`
    );
    const data = await response.json();
    console.log('location data ', data);

    const locationKey = data[0].ParentCity.Key;
    console.log(locationKey);

    const currentCoditionsResponse = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=wDZvrcyGZGawxdHModUXQpIAGG6cDHps`
    );
    const currentConditions = await currentCoditionsResponse.json();

    console.log('current conditions ', currentConditions);
  } catch (error) {
    console.log('error ', error);
  }
};

const zip = prompt('Whats your zipcode');

currentConditions(zip);