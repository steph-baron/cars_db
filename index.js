const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

const cars = require('./routes/cars')
app.use(cars);

app.listen(2000, function(){
  console.log('Listening at port 2000...');
});
