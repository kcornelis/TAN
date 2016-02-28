require('ts-node/register');
var config = require('./config/express');

var express = new config.Express();
express.start();
