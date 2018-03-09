
let request = require('async-request')
const respond = require('./../helper/response');
const successConst = require('./../constants/success');
const groupService = require('./../services/group');
const Group = require('./../models/group');
let apiKey = process.env.apiKey;
let https = require('https');
let headers={ 'content-type': 'application/json','X-MailerLite-ApiKey': apiKey}
const mailer = {

    index: (req, res, next) => {
        respond.success(res, successConst.OK);
    },
    addgroup: async (req, res, next) => {
        try {
            let data = req.body
            let reqs = await request('https://api.mailerlite.com/api/v2/groups', {
                method: 'POST',
                headers: headers,
                data: data
            })
            const group = await groupService.addgroup(JSON.parse(reqs.body));
            const resp = successConst.OK;
            resp.data = group;
            respond.success(res, resp);

        } catch (error) {
            console.log(error)
        }
    },
    addsubscriber: async (req, res, next) => {
        try {
            let data = req.body
            let reqs = await request('https://api.mailerlite.com/api/v2/subscribers', {
                method: 'POST',
                headers: headers,
                data: data
            })
            const resp = successConst.OK;
            resp.data = reqs.body;
            respond.success(res, resp);

        } catch (error) {
            console.log(error)
        }
    },
    addsubscribertogroup: async (req, res, next) => {
        try {
            let data = req.body
            console.log(data.tempaleType);
            let group = await Group.findOne({groupname:data.tempaleType},{mlgid:1})
            let reqs = await request('https://api.mailerlite.com/api/v2/groups/'+group.mlgid+'/subscribers', {
                method: 'POST',
                headers: headers,
                data: data
            })
            const resp = successConst.OK;
            resp.data = reqs.body;
            respond.success(res, resp);

        } catch (error) {
            console.log(error)
        }
    },
    viewsubscriber: async (req, res, next) => {
        try {
            let data = req.body
            let reqs = await request('https://api.mailerlite.com/api/v2/groups/9330472/subscribers', {
                method: 'GET',
                headers: headers,
                data: data
            })
            const resp = successConst.OK;
            resp.data = reqs.body;
            respond.success(res, resp);

        } catch (error) {
            console.log(error)
        }
    },

    viewallgroup: async (req, res, next) => {
        try {

            let reqs = await request('https://api.mailerlite.com/api/v2/groups', {
                method: 'GET',
                headers: headers,
            })
            const resp = successConst.OK;
            resp.data = reqs.body;
            respond.success(res, resp);


        } catch (error) {
            console.log(error)
        }
    },
    addfield: async (req, res, next) => {
        try {
            let data = req.body
            let reqs = await request('http://api.mailerlite.com/api/v2/fields', {
                method: 'POST',
                headers: headers,
                data: data
            })
            const resp = successConst.OK;
            resp.data = reqs.body;
            respond.success(res, resp);

        } catch (error) {
            console.log(error)
        }
    },



};

module.exports = mailer; 