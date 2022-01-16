import express from "express";
import cors from "cors";
import { Thermostat } from './thermostat.js';

const app = express();
app.use(
  cors({
    origin: "*"
  })
)
const PORT = 3000;

const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  const temp = thermostat.getTemperature()
  res.send(JSON.stringify({"temperature": temp}));
})

app.post('/up', (req, res) => {
  thermostat.up();
  const temp = thermostat.getTemperature()
  res.send(JSON.stringify({"temperature": temp}));
});

app.post('/down', (req, res) => {
  thermostat.down();
  const temp = thermostat.getTemperature()
  res.send(JSON.stringify({"temperature": temp}));
})

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  const temp = thermostat.getTemperature()
  res.send(JSON.stringify({"temperature": temp}));
})


console.log(`Listening on port: ${PORT}`);
app.listen(PORT);