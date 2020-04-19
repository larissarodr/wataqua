const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes/routes')
const helmet = require('helmet');

const app = express();

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

function logRequests(request, response, next){ //middleware
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.time(logLabel);
  
  next();

  console.timeEnd(logLabel);
}

app.use(logRequests);
app.use(helmet());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;