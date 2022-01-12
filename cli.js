const Thermostat = require('./thermostat');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const thermostat = new Thermostat();

const command = () => {
  // Display conditionals
  let temp_str = `Temperature is ${thermostat.getTemperature()}`;
  if (thermostat.powerSavingMode && thermostat.getTemperature() >= 25) {
    temp_str += " (maximum reached)";
  } else if (!thermostat.powerSavingMode && thermostat.getTemperature() >= 32) {
    temp_str += " (maximum reached)";
  } else if (thermostat.getTemperature() <= 10) {
    temp_str += " (minimum reached)";
  }
  // Display string 
  console.log(temp_str);
  // Take input with prompt
  rl.question('Enter command > ', (answer) => {
    switch (answer) {
      case 'up':
        thermostat.up()
        command();
        break;
      
      case 'down':
        thermostat.down()
        command();
        break;

      case 'psm on':
        thermostat.setPowerSavingMode(true);
        command();
        break;
      
      case 'psm off':
        thermostat.setPowerSavingMode(false);
        command();
        break;

      case 'exit':
        rl.close();
        break;
    
      default:
        console.log("That is not a valid command.")
        command();
        break;
    }
  });
};

command();
