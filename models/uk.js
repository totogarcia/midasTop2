'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Uk = Schema({
    col1: String,
    col0: String,
    col2: Number,
    col3: String,
    col6: Number,
    col5: Number,
    col4: Number
});

module.exports = mongoose.model('uk', Uk);