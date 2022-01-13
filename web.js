import express from "express";
import { Thermostat } from './thermostat.js';

const app = express();
const port = 3000;

const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  res.send(thermostat.getTemperature().toString());
})

app.post('/up', (req, res) => {
  thermostat.up();
  res.send('Temperature incremented')
});

app.post('/down', (req, res) => {
  thermostat.down();
  res.send('Temperature decremented')
})

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.send('Temperature reset')
})


console.log(`Listening on port: ${port}`);
app.listen(port);