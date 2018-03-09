
let request = require('async-request')
const respond = require('./../helper/response');
const successConst = require('./../constants/success');
const AuthService = require('./../services/auth');
const Group = require('./../models/group');
let apiKey = process.env.apiKey;
const auth = {

    index: (req, res, next) => {
        respond.success(res, successConst.OK);
    },
    login: async (req, res, next) => {
        try {
            const authService = new AuthService(req.body);
            const user = await authService.login();
            const resp = successConst.OK;
            resp.data = user;
            respond.success(res, resp);
        } catch (error) {
           next(error);
        }
    },
    signup: async (req, res, next) => {
        try {
            const usr = await authService.create(req.body);
            console.log("created")
            const resp = successConst.CREATED;
            resp.data = usr;
            respond.success(res, resp);
        } catch (error) {
            console.log(error)
       next(error);
        }
    },
   
};

module.exports = auth; 