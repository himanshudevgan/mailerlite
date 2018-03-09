'use strict';
const express = require('express');
const authroutes = express.Router();
const authcontroller = require('./../controller/auth');
authroutes.post('/login',  authcontroller.login);
authroutes.post('/signup',  authcontroller.signup);
module.exports = authroutes;
