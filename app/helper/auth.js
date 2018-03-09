'use strict';
const User = require('./../models/user');
const auth = {
    
    isUsernameExist: async (username) => {
        const user = await User.findOne({username: username});
        if(user)
            return user;
        return false;
    },
    isEmailExist: async (email) => {
        const user = await User.findOne({email: email});
        if(user)
            return user;
        return false;
    },
    isuserExist: async (value ) =>{
        const user = await User.findOne({companyemail: value.email})
        const companyid = await userCompany.findOne({userid: user._id})
    

        let userid= await User.findOne(
            { companyemail: value.companyemail },
            )
            
        let cmpid= await userCompany.findOne(
            { userid: userid._id },
                )
         
            if (companyid.companyid.toString() == cmpid.companyid.toString()) {
                return true;
            }
            return false ;


    },



    
};
module.exports = auth;