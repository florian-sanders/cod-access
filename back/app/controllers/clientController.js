const { Client } = require('../models');
const jsonwebtoken = require('jsonwebtoken');
const jwt = require('express-jwt');

module.exports = {

    getAllClients: async (req, res) => {
        try{
            const role = req.user.clientRole
            if(role !== 'admin'){
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const clients = await Client.findAll();
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
            // var decoded = jwt.verify(token, process.env.JWTSECRET);
            // console.log('decoded', decoded)
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
            if(req.body.responsibility === 'client'){
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

}