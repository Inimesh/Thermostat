
import { WeatherApi } from "./weatherApi.js";

class Thermostat {
  constructor(weather= new WeatherApi()) {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.weather = weather;
  }

  setCity(city) {
    this.weather.fetchWeatherData(city, (data) => {
      this.temperature = data.main.temp;
    })
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSavingMode && this.getTemperature() < 25) {
      this.temperature++;
    } else if (!this.powerSavingMode && this.getTemperature() < 32) {
      this.temperature++;
    }
  }

  down() {
    if (this.getTemperature() > 10) {
      this.temperature--;
    }
  }

  setPowerSavingMode(bool) {
    this.powerSavingMode = bool;
  }

  reset() {
    this.temperature = 20;
  }

  getEnergyUsage() {
    if (this.getTemperature() < 18) {
      return "low";
    } else if (this.getTemperature() <= 25) {
      return "medium"
    } else {
      return "high"
    }
  }

}

export { Thermostat };
//  module.exports = Thermostat;