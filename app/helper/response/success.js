'use strict';
const success = (res, data) => {
    return res.status(data.status || 200).json(data);
};
module.exports = success;