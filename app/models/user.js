'use strict';
const mongoose = require('mongoose');
const hashHelper = require('./../helper/hash');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        
    },
    
    last_login: {
        type: Date,
        default: Date.now
    },
    metaData: [{
        type: Schema.Types.Mixed,
        default: null
    }]
},
{
    timestamps: true,
    autoIndex: true
});
userSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.password;
        delete ret.__v;
        return ret;
    }
});
userSchema.pre('save', function (next) {
    if (this.isModified('password') || this.isNew) {
        this.password = hashHelper.generate(this.password);
    }
    return next();
});
const User = mongoose.model('User', userSchema);
module.exports = User;