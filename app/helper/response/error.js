'use strict';
const error = (res, data) => {
    return res.status(data.status || 500).json(data);
};
module.exports = error;