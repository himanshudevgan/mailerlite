'use strict';
const express = require('express');
const grouproutes = express.Router();
const groupcontroller = require('./../controller/group');
const IsAuthenticated = require('./../middlewares/isAuthenticated');
grouproutes.get('/',IsAuthenticated,  groupcontroller.index);
grouproutes.get('/getgroup',  groupcontroller.getgroup);

module.exports = grouproutes;
