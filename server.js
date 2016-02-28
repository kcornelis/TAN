require('ts-node/register');
var Express = require('./config/express');

var express = new Express();
express.start();
