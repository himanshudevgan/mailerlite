'use strict';
const error = Object.freeze({
    ROUTE_NOT_FOUND: {
        status: 404,
        name: 'ROUTE NOT FOUND',
        message: 'Route does not exist'
    },
    DUPLICATE_USERNAME: {
        status: 409,
        name: 'DUPLICATE USERNAME',
        message: 'Username already taken.'
    },
    DUPLICATE_EMAIL: {
        status: 409,
        name: 'DUPLICATE EMAIL',
        message: 'Email already taken.'
    },
    INVALID_EMAIL: {
        status: 400,
        name: 'INVALID EMAIL',
        message: 'Email is invalid.'
    },
    INVALID_EMAIL_PASSWORD: {
        status: 401,
        name: 'INVALID EMAIL PASSWORD',
        message: 'Wrong email or password.'
    },
    UNAUTHORIZED: {
        status: 401,
        name: 'UNAUTHORIZED',
        message: 'unauthorized user.'
    },
    NOT_ACCEPTABLE: {
        status: 406,
        name: 'NOT ACCEPTABLE',
        message: 'Data provided is invalid.'
    }
});
module.exports = error;