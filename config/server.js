/**
 * Libraries used in project initiation
 */
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express(); // constant of the node server that will be executed

app.use(bodyParser.urlencoded({ extended: true })); // equest data encode
app.use(expressValidator());// validator configuration of data carried over in json

// configuring dependency injection of the project files and storing in the constant app
consign()
    .include('app/routes')
    .then('config/db_config.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app; // exporting instance of the created node server