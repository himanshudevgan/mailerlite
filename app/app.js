'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').load();
require('dotenv').config();
const Route = require('./routes/routes');
const grouproutes = require('./routes/grouproutes');
const authroutes = require('./routes/auth');
const response = require('./helper/response');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB, {
   // useMongoClient: true
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// console.log(process.env)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
   next();
});
app.use('/api/mailerlite', Route);
app.use('/api/groups', grouproutes);
app.use('/api', authroutes);

app.use((error, req, res, next) => {
    if(error.name === 'ValidationError')
        error = errorConst.NOT_ACCEPTABLE;
    if (app.get('env') !== 'development')
        error.stack = null;
    response.error(res, error);
});
module.exports = app;