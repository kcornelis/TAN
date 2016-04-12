require('ts-node/register');
var config = require('./app/config');
var settings = new config.Settings(process.env.NODE_ENV);
var express = new config.Express(settings);

var start = function() {
    return express.start();
}

var stop = function() {
    return express.stop();
}

if(process.env.NODE_ENV !== 'test') {
    start();
}

exports.start = start;
exports.stop = stop;