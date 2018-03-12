
let request = require('async-request')
const respond = require('./../helper/response');
const successConst = require('./../constants/success');
const groupService = require('./../services/group');
const Group = require('./../models/group');
const clacGroup = require('./../models/calcgroup');
let apiKey = process.env.apiKey;
let headers={ 'content-type': 'application/json','X-MailerLite-ApiKey': apiKey}
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
    deletegroup: async (req, res, next) => {
        try {
            let id = req.params.groupId;
            let remove = await Group.findOneAndUpdate({ _id: id }, {
                $set: {active: false}
            });
            let reqs = await request('https://api.mailerlite.com/api/v2/groups/'+remove.mlgid, {
                method: 'DELETE',
                headers: headers
            })
            const resp = successConst.OK;
            resp.data = reqs;
            respond.success(res, resp);

        } catch (error) {
            console.log(error)
        }
    },
    deletefield: async (req, res, next) => {
        try {
            let id = req.params.fieldId;
                let reqs = await request('http://api.mailerlite.com/api/v2/fields/'+id, {
                method: 'DELETE',
                headers: headers
            })
            const resp = successConst.OK;
            resp.data = reqs;
            respond.success(res, resp);

        } catch (error) {
            console.log(error)
        }
    },

    viewallfield: async (req, res, next) => {
        try {

            let reqs = await request('http://api.mailerlite.com/api/v2/fields', {
                method: 'GET',
                headers: headers,
            })
            const resp = successConst.OK;
            resp.data = JSON.parse(reqs.body);
            respond.success(res, resp);


        } catch (error) {
            console.log(error)
        }
    },
    link: async (req, res, next) => {
        try {
            let data = req
            const group = await groupService.link(req.body);
            const resp = successConst.OK;
            resp.data = group
            respond.success(res, resp);


        } catch (error) {
            console.log(error)
        }
    },
};

module.exports = group; 