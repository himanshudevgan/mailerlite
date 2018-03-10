'use strict';
const Group = require('./../models/group');
const AuthHelper = require('./../helper/auth');
const response = require('./../helper/response');
const successConst = require('./../constants/success');
const errorConst = require('./../constants/error');
const JwtHelper = require('./../helper/jwt');
const HashHelper = require('./../helper/hash');
const User = require('./../models/user');
module.exports = class Auth {
    constructor(user) {
        this.user = user;
    }
    async login() {
        let user = await AuthHelper.isEmailExist(this.user.email);
        if (user) {
            let match = HashHelper.compare(this.user.password, user.password);
            if (match) {
                let token = JwtHelper.generateToken(user);
                return {
                    user: user,
                    token: token
                };
            }
        }
        let error = new Error();
        error = errorConst.INVALID_EMAIL_PASSWORD;
        throw error;
    }
    async create() {
        let usr = await new User(this.user);
         return  usr = await usr.save()
    }
}