import express from "express";
import { Thermostat } from './thermostat.js';

const app = express();
const port = 3000;

const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  res.send(thermostat.getTemperature().toString());
})


console.log(`Listening on port: ${port}`);
app.listen(port);