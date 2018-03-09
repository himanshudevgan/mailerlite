'use strict';
const JwtHelper = require('./../helper/jwt');
const IsAuthenticated = (req, res, next) => {
    let verified = JwtHelper.verifyToken(req.headers.authorization);
    
    if(verified.name === 'TokenExpiredError') {
        res.status(401).json({
            message: "Token expired"
        });
    } else {
        req.userData = verified;
        next();
    }
};
module.exports = IsAuthenticated;