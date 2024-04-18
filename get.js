// getting data from API need users zip code input and location. for five day forfaorcst then that is stored into a file.

export const currentConditions = async (zipCode) => {
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
      dataTable.innerHTML = "";
    const city = document.createElement("h1").innerHTML = data[0].LocalizedName + " weather forecast for the next five days";
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
      console.log(fiveDayForecast);
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
