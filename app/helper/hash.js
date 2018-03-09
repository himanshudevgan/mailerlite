'use strict';
const bCrypt = require('bcrypt-nodejs');
const hash = {
    generate: (text) => {
        const salt = bCrypt.genSaltSync(10);
        return bCrypt.hashSync(text, salt);
    },
    compare: (plain, hashed) => {
        return bCrypt.compareSync(plain, hashed);
    },
};
module.exports = hash;