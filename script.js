document.getElementById("search-btn").addEventListener("click", function() {
    let zipCode = document.getElementById("search-input").value;
    currentConditions(zipCode);
}, false);

const currentConditions = async (zipCode) => {
  try {
    // const headers = new Headers({
    //   'x-api-key': 'A0eLxjDMQC919yA8VukwvzicrL5uZqGk',
    // });
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=A0eLxjDMQC919yA8VukwvzicrL5uZqGk&q=${zipCode}`
    );
    const data = await response.json();
    const locationKey = data[0].ParentCity.Key;

    const fiveDayForecastResponse = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=A0eLxjDMQC919yA8VukwvzicrL5uZqGk`);
    const fiveDayForecast = await fiveDayForecastResponse.json();
      
    //document.getElementById("greeting").innerHTML = "";
    const dataTable = document.getElementById("data-table");
    const city = document.createElement("h1").innerHTML = data[0].LocalizedName + " weather forcast for the next five days";
    dataTable.append(city);
      
      const weatherTable = document.createElement("table");
      weatherTable.classList.add("weather-table");
    //   weatherTable.style.width = "90%";
    //   weatherTable.style.margin = "auto";
    //   weatherTable.style.textAlign = "center";
      const tableHeaders = document.createElement("tr");
      const dateHeader = document.createElement("th");
      const forecastHeader = document.createElement("th");
      const tempHeader = document.createElement("th");
      //const windHeader = document.createElement("th");
      dateHeader.innerHTML = "Date";
      forecastHeader.innerHTML = "Forecast";
      tempHeader.innerHTML = "Temperature";
      //windHeader.innerHTML = "Wind Speed";
      tableHeaders.appendChild(dateHeader);
      tableHeaders.appendChild(forecastHeader);
      tableHeaders.appendChild(tempHeader);
      //tableHeaders.appendChild(windHeader);
      weatherTable.appendChild(tableHeaders);
      dataTable.appendChild(weatherTable);

      fiveDayForecast.DailyForecasts.forEach(dailyForecast => {
          let row = document.createElement("tr");
          let date = document.createElement("td");
          let forecast = document.createElement("td");
          let temp = document.createElement("td");
          //let wind = document.createElement("td");

          date.innerHTML = new Date(dailyForecast["Date"]).toDateString();
          forecast.innerHTML = dailyForecast["Day"]["IconPhrase"];
          temp.innerHTML = "Max: " + dailyForecast["Temperature"]["Maximum"]["Value"] + " Min: " + dailyForecast["Temperature"]["Minimum"]["Value"];
          row.appendChild(date);
          row.appendChild(forecast);
          row.appendChild(temp);
          weatherTable.appendChild(row);
        console.log(dailyForecast);
    });

  } catch (error) {
    console.log('error ', error);
  }
};

// import axios from "axios";

// The get submit button element.
// const submitBtn = document.getElemnetById("search")


// Step 0: Store your API key here for reference and easy access.
// const API_KEY= "A0eLxjDMQC919yA8VukwvzicrL5uZqGk";
// location-key "324597";

// const url = "https://api.thecatapi.com/v1/breeds";
// axios.defaults.headers.common["x-api-key"] = API_KEY



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



// const currentConditions = async (zipCode) => {
//   try {
//     // const headers = new Headers({
//     //   'x-api-key': 'A0eLxjDMQC919yA8VukwvzicrL5uZqGk',
//     // });
//     const response = await fetch(
//       `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=A0eLxjDMQC919yA8VukwvzicrL5uZqGk&q=${zipCode}`
//     );
//     const data = await response.json();
//     console.log('location data ', data);

//     const locationKey = data[0].ParentCity.Key;
//     console.log(locationKey);

//     const currentCoditionsResponse = await fetch(
//       `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=wDZvrcyGZGawxdHModUXQpIAGG6cDHps`
//     );
//     const currentConditions = await currentCoditionsResponse.json();

//     console.log('current conditions ', currentConditions);
//   } catch (error) {
//     console.log('error ', error);
//   }
// };

//const zip = prompt('Whats your zipcode');

//currentConditions(zip);