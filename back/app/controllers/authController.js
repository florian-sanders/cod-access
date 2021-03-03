const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

const jwtSecret = 'OurSuperLongRandomSecretToSignOurJWTgre5ezg4jyt5j4ui64gn56bd4sfs5qe4erg5t5yjh46yu6knsw4q';
const authorizationMiddleware = jwt({ secret: jwtSecret, algorithms: ['HS256'] });
const { Client } = require('../models');

module.exports = {

    submitLoginForm: async (req, res) => {
        try {
          if (req.body.email.length === 0 || req.body.password.length === 0) {
            console.log('<< 401 UNAUTHORIZED');
            res.sendStatus(401);
          } else {
            const client = await Client.findOne({
              where: {
                email: req.body.email
              }
            });

            if (!client) {
            console.log('<< 401 UNAUTHORIZED');
            res.sendStatus(401);
            } else {
            //   const isValidPassword = await bcrypt.compare(req.body.password, client.password);
            //   if (isValidPassword) { }
              if(req.body.password === client.password){
              
                const jwtContent = { clientId: client.id };
                const jwtOptions = { 
                  algorithm: 'HS256', 
                  expiresIn: '3h' 
                };
                console.log('<< 200', client.pseudo);
                res.json({ 
                  logged: true, 
                  pseudo: client.pseudo,
                  token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions),
                });
              }
     
              else {
                console.log('<< 401 UNAUTHORIZED');
                res.sendStatus(401);
              }
            }
          }
        } catch (error) {
          console.trace(error);
        }
      },
};