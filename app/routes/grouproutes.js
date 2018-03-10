'use strict';
const express = require('express');
const grouproutes = express.Router();
const groupcontroller = require('./../controller/group');
const IsAuthenticated = require('./../middlewares/isAuthenticated');
grouproutes.get('/',IsAuthenticated,  groupcontroller.index);
grouproutes.get('/getgroup',  groupcontroller.getgroup);
grouproutes.get('/getfield',  groupcontroller.viewallfield);
grouproutes.put('/deletegroup/:groupId', groupcontroller.deletegroup)
grouproutes.put('/deletefield/:fieldId', groupcontroller.deletefield)
module.exports = grouproutes;
