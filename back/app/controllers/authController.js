const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const jsonwebtoken = require('jsonwebtoken');
const jwtSecret = process.env.JWTSECRET;
const mailPassword = process.env.MAILPASSWORD;
const mailPath = process.env.MAILPATH;
const { Client } = require('../models');
const nodemailer = require('nodemailer');

module.exports = {

  signout: async (req, res) => {
    res.status(200)
      .clearCookie('token', { httpOnly: true })
      .json({ message: 'signed out' });
  },

  // this token will be sent into a cookie as well as a header set by the React App
  // the csrf middleware in the entry file of the server is in charge of checking
  // that both the tokens (sent in cookie + sent in header) are a match.
  // This is to ensure the React App is the source of the request.
  getCSRFToken: (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
  },

  submitSignupForm: async (req, res) => {
    try {

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
      if (client) {
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

        //send mail to newClient
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: mailPath,
            pass: mailPassword
          },
          tls: {
            rejectUnauthorized: false
          }
        });
        const mailOptions = {
          from: mailPath,
          to: req.body.email,
          subject: 'Cod\'access bienvenue à bord!',
          text: 'Bienvenue sur cod\'access'
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            return res.status(500).json('mail failed');
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

        console.log('200 ok', newClient);
        return res.status(200).json(newClient);
      }
    } catch (error) {
      console.error(error);
      return res.status(500);
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
          include: ['responsibility', 'client_picture']
        });

        if (!client) {
          console.log('miss client');
          return res.status(404).json({
            errorType: 404,
            message: 'miss client'
          });
        } else {
          const isValidPassword = await bcrypt.compare(req.body.password, client.password);
          if (isValidPassword) {

            const jwtContent = {
              clientId: client.id,
              clientRole: client.responsibility.entitled,
            };
            const jwtOptions = {
              algorithm: process.env.JWTALGO,
              expiresIn: '3h'
            };
            console.log('200 ok', client);
            const token = jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions);

            res.cookie('token', token, { httpOnly: true });
            return res.status(200).json({
              id: client.id,
              pseudo: client.pseudo,
              email: client.email,
              responsibility: client.responsibility,
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
      console.error(error);
      return res.status(500);
    }
  },

  submitContact: async (req, res) => {
    try {
      if (req.body.name.length === 0) {
        console.log('need name');
        return res.status(411).json({
          errorType: 411,
          message: 'need name'
        });
      };
      if (req.body.content.length === 0) {
        console.log('need content');
        return res.status(411).json({
          errorType: 411,
          message: 'need content'
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
      //need email/name/content from front
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: mailPath,
          pass: mailPassword
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      //send mail to client
      const mailOptionsToClient = {
        from: mailPath,
        to: req.body.email,
        subject: 'Confirmation d\envois de message',
        text: `Merci Mr ${req.body.name} pour l'intérêt que vous portez à notre site. Nous avons bien reçu votre message et traiterons votre demande dans les plis brefs délais. Cordialement.`
      };

      transporter.sendMail(mailOptionsToClient, function (error, info) {
        if (error) {
          console.log(error);
          return res.status(500).json('mail failed');
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      //send mail to us
      const mailOptionsToUs = {
        from: mailPath,
        to: mailPath,
        subject: 'New message from' + ' ' + req.body.name,
        text: req.body.content
      };

      transporter.sendMail(mailOptionsToUs, function (error, info) {
        if (error) {
          console.log(error);
          return res.status(500).json('mail failed');
        } else {
          console.log('Email sent: ' + info.response);
          return res.status(200).json('mails send');
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500);
    }
  },
};