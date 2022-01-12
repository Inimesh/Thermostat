import { got } from "got";
import { apiKey } from "./api_key.js";



class WeatherApi {
  fetchWeatherData(city, callback) {
    const apiurl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

    got(apiurl).then((response) => {
      const weatherData = JSON.parse(response.body);
      callback(weatherData);

    });

  };

};

// const weatherApi = new WeatherApi();

// weatherApi.fetchWeatherData('London', (data) => {
//   console.log(data);

// });


export { WeatherApi };