'use strict'
// npm start / nodemon index.js
// mongo
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var api = require('./routes/ruta');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow', 'GET,POST,OPTIONS,PUT,DELETE');
    next();
});
app.use(express.static(path.join(__dirname,'client')));
app.use('/api', api);

module.exports = app;

// '(req, res) => {' esto es igual a 'function(req, res) {'
// Req (request) es lo que pregunta, res es la respuesta
// escribiendo http://localhost:3678/prueba en el navegador saldría el texto en un json