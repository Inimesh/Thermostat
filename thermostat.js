class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
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

module.exports = Thermostat;