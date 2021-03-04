const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

const jwtSecret = 'OurSuperLongRandomSecretToSignOurJWTgre5ezg4jyt5j4ui64gn56bd4sfs5qe4erg5t5yjh46yu6knsw4q';
const authorizationMiddleware = jwt({ secret: jwtSecret, algorithms: ['HS256'] });
const { Client } = require('../models');
const nodemailer = require('nodemailer');

module.exports = {

  submitSignupForm: async (req, res) => {
    try{

      if (req.body.pseudo.length === 0) {
        console.log('need pseudo');
        return res.status(411).json({
          errorType: 411,
          message: 'need pseudo'
        });
      };
      const isValidEmail = emailValidator.validate(req.body.email);
      if (!isValidEmail) {
        console.log('email incorrect');
        return res.status(406).json({
          errorType: 406,
          message: 'email incorrect'
        });
      }
      if (req.body.password.length < 6) {
        console.log('password need 6');
        return res.status(411).json({
          errorType: 411,
          message: 'password need 6'
        });
      }
      if (req.body.password !== req.body.passwordConfirm) {
        console.log('password and confirm not same')
        return res.status(406).json({
          errorType: 406,
          message: 'password and confirm not same'
        });
      }
      const client = await Client.findOne({
        where: {
          email: req.body.email
        }
      });
      if(client){
        console.log('email used');
        return res.status(406).json({
          errorType: 406,
          message: 'email used'
        });
      } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newClient = new Client({
          email: req.body.email,
          password: hashedPassword,
          pseudo: req.body.pseudo,
          responsibility_id: 1
        });
        await newClient.save();
        console.log('200 ok', newClient);
           
        //send mail to newClient
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'cod.access11@gmail.com',
            pass: 'ftiU86nRd34E'
          },
          tls: {
              rejectUnauthorized: false
            }
        });
        const mailOptions = {
          from: 'cod.access11@gmail.com',
          to: req.body.email,
          subject: 'Cod\'access welcome on board!',
          text: 'Bienvenue sur cod\'access'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        return res.status(200).json(newClient);
      }
    } catch (error) {
      console.trace(error);
    }
  },

  submitLoginForm: async (req, res) => {
      try {
        if (req.body.email.length === 0 || req.body.password.length === 0) {
          console.log('need email & password');
          return res.status(411).json({
            errorType: 411,
            message: 'need email or password'
          });
        } else {
          const client = await Client.findOne({
            where: {
              email: req.body.email
            },
            include: 'responsibility'
          });

          if (!client) {
          console.log('miss client');
          return res.status(404).json({
            errorType: 404,
            message: 'miss client'
          });
          } else {
            const isValidPassword = await bcrypt.compare(req.body.password, client.password);
              if(isValidPassword){
            
              const jwtContent = { clientId: client.id };
              const jwtOptions = { 
                algorithm: 'HS256', 
                expiresIn: '3h' 
              };
              console.log('200 ok', client);
              return res.status(200).json({ 
                pseudo: client.pseudo,
                email: client.email,
                role: client.responsibility.entitled,
                token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions),
              });
              
            }
    
            else {
              console.log('unauthorized');
              return res.status(401).json({
                errorType: 401,
                message: 'unauthorized'
              });
            }
          }
        }
      } catch (error) {
        console.trace(error);
      }
    },
};