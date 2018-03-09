'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const groupSchema = new Schema({
    groupname: {
        type: String,
        required: true,
    },
    mlgid: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true
    }  
},
{
    timestamps: true,
    autoIndex: true
});
const Group = mongoose.model('Groups', groupSchema);
module.exports = Group;