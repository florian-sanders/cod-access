/**
 * @module jwt - used to decode the token,
 * jwtSecret and algorithmsJWT are required to setup,
 * jwt is stored into httpOnly cookie,
 * Will store token info in req.body in case a JWT is present.
 */
const jwt = require('express-jwt');

const decodeJWT = jwt({
    secret: process.env.JWTSECRET,
    algorithms: [process.env.JWTALGO],
    credentialsRequired: false,
    getToken: (req) => req.cookies.token,
});

module.exports = decodeJWT;