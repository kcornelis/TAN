require('ts-node/register');
var config = require('./app/config');

var express = new config.Express();
express.start();
