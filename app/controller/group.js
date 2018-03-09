
let request = require('async-request')
const respond = require('./../helper/response');
const successConst = require('./../constants/success');
const groupService = require('./../services/group');
const Group = require('./../models/group');
let apiKey = process.env.apiKey;
const group = {

    index: (req, res, next) => {
        respond.success(res, successConst.OK);
    },
    login: async (req, res, next) => {
        try {
            const user = await groupService.login(req.body);
            const resp = successConst.OK;
            resp.data = user;
            respond.success(res, resp);
        } catch (error) {
            console.log("error",error)
           next(error);
            
        }
    },
    getgroup: async (req,res,next)=>{
        try {
            
            const group = await groupService.getgroup()
            const resp = successConst.CREATED;
            resp.data = group;
            respond.success(res, resp);
        } catch (error) {
            console.log(error);
        next(error);
        }
    },
};

module.exports = group; 