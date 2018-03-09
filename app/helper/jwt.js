'use strict';
const jwt = require('jsonwebtoken');
const errorConstant = require('./../constants/error');
const JWT = {
    generateToken: (user) => {
        return jwt.sign({
            id: user._id,
            email: user.companyemail
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "18h"  
        });
    },
    verifyToken: (token) => {
        token = token ? token.split(' ') : [];
        if(token[0] === 'JWT')
            token = token[1];
        else
            token = null;
        try {
            return jwt.verify(token, process.env.JWT_SECRET, null);
        } catch(error) {
            throw errorConstant.UNAUTHORIZED;
            console.log("unauth")
        }
    }
};
module.exports = JWT;