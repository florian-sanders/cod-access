/**
 * @module jwt - used to check the token validity from request headers,
 * jwtSecret and algorithmsJWT are required to setup,
 * jwt is stored into httpOnly cookie,
 * If token is valid, will go to next middleware, if not, will throw an error
 */
const jwt = require('express-jwt');

const checkJWTHeader = jwt({
    secret: process.env.JWTSECRET,
    algorithms: [process.env.JWTALGO]
});

module.exports = checkJWTHeader;