const { Client } = require('../models');
const jsonwebtoken = require('jsonwebtoken');
const jwt = require('express-jwt');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
// const multer = require('multer');
// const upload = multer({ storage: storage }).single('file')

module.exports = {

    // upload: (req, res) => {
    //     try {
    //       res.send(req.file);
    //     }catch(err) {
    //       res.send(400);
    //     }
    //   });
    

    getAllClients: async (req, res) => {
        try{
            const role = req.user.clientRole
            if(role !== 'admin'){
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const clients = await Client.findAll({
                include:'responsibility'
            });
            console.log('clients', clients);
            return res.status(200).json(
            clients
            );

        } catch(error) {
            console.error(error);
            return res.status(500);
        }
    },

    getOneClient: async (req, res, next) => {
        try{
            const id = Number(req.user.clientId);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const client = await Client.findByPk(id, {
                include: ['client_picture','responsibility','docs','exercises']
              });
            console.log('client', client);
            return res.status(200).json(
                client
                );

        } catch(error) {
            console.error(error);
            return res.status(500);
        }
    },
    
    changeRoleClient: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if(role !== 'admin'){
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            if(req.body.responsibility === 'utilisateur'){
                req.body.responsibility = 1
            }else if(req.body.responsibility === 'admin'){
                req.body.responsibility = 2
            }else{
                return res.status(400).json({
                    error: `the status must be client or admin`
                });
            }
            const client = await Client.findByPk(id, {
                include: 'responsibility'
            });
            
            if (!client) {
                console.log('miss client');
                return res.status(404).json({
                  errorType: 404,
                  message: 'miss client'
                });
            }
            await client.update({responsibility_id: req.body.responsibility});
            return res.json('client update');

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    deleteOneClient: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if(role !== 'admin'){
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const client = await Client.findByPk(id);
            if (!client) {
                console.log('miss client');
                return res.status(404).json({
                  errorType: 404,
                  message: 'miss client'
                });
            }
            await client.destroy();
            return res.json('client delete');

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    updateClient: async (req, res, next) => {
        try {
            const id = Number(req.user.clientId);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const client = await Client.findByPk(id);
            if(req.body.email){
                const otherClient = await Client.findOne({where: {email: req.body.email}})
                if (otherClient) {
                console.log('email used');
                return res.status(406).json({
                    errorType: 406,
                    message: 'email used'
                });
                } else {
                const isValidEmail = emailValidator.validate(req.body.email);
                if (!isValidEmail) {
                    console.log('email incorrect');
                    return res.status(406).json({
                    errorType: 406,
                    message: 'email incorrect'
                    });
                }}
                await client.update({email: req.body.email});
                return res.status(200).json(
                    client
                    );
            }

            if (req.body.password) {
                const isValidPassword = await bcrypt.compare(req.body.password, client.password);
                if (isValidPassword) {

                    if (req.body.newPassword.length < 6) {
                        console.log('password need 6');
                        return res.status(411).json({
                            errorType: 411,
                            message: 'password need 6'
                        });
                    }
                    if (req.body.newPassword !== req.body.newPasswordConfirm) {
                        console.log('password and confirm not same')
                        return res.status(406).json({
                            errorType: 406,
                            message: 'password and confirm not same'
                        });
                    }
                    const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
                    await client.update({ password: hashedPassword });
                    return res.status(200).json(
                        client
                    );

                } else {
                    console.log('unauthorized');
                    return res.status(401).json({
                        errorType: 401,
                        message: 'unauthorized'
                    });
                }
            }
            if(req.body.pseudo){
                await client.update({pseudo: req.body.pseudo}); 
                return res.status(200).json(
                    client
                    );
            }
          
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
}