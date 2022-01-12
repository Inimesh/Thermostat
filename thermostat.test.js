const Thermostat = require('./thermostat')

const thermostat = new Thermostat();

describe("Thermostat", () => {
  describe("#getTemperature()", () => {
    it("should return 20", () => {
      expect(thermostat.getTemperature()).toBe(20);
    })
  })

  describe('#up()', () => {
    it("should be able to increase the temperature", () => {
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(22);
    })
    describe("Power saving mode is on", () => {
      it("should not exceed 25 degrees", () => {
        thermostat.reset();
        for(let i = 0; i < 100; i++) {
          thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(25);
      })
    })
    describe("Power saving mode is off", () => {
      it("should not exceed 32 degrees", () => {
        thermostat.setPowerSavingMode(false);
        thermostat.reset();
        for(let i = 0; i < 100; i++) {
          thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(32);
      })
    }) 
  })

  describe('#down()', () => {
    it("should be able to decrease the temperature", () => {
      thermostat.reset();
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(19);
    })
    it("should not go below 10", () => {
      thermostat.reset();
      for(let i = 0; i < 1000; i++) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toBe(10);
    }) 
  })

  describe("#setPowerSavingMode()", () => {
    it("should set power saving mode to true", () => {
      thermostat.setPowerSavingMode(true);
      expect(thermostat.powerSavingMode).toBe(true);
    })
    it("should set power saving mode to false", () => {
      thermostat.setPowerSavingMode(false);
      expect(thermostat.powerSavingMode).toBe(false);
    })
  })

  describe('#reset', () => {
    it("should be able to reset the temperature to 20", () => {
      thermostat.reset();
      expect(thermostat.getTemperature()).toBe(20);
    })
  })

  describe('#getEnergyUsage', () => {
    thermostat.reset();
    it("should be able to get current energy usage (medium)", () => {
      expect(thermostat.getEnergyUsage()).toBe('medium')
    })

    it("should be able to get current energy usage (low)", () => {
      for (let i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.getEnergyUsage()).toBe("low")
    })

    it("should be able to get current energy usage (high)", () => {
      for (let i = 0; i < 100; i++) {
        thermostat.up();
      }
      expect(thermostat.getEnergyUsage()).toBe("high")
    })
  })
  
  
  
})