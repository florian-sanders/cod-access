const { Client } = require('../models');

module.exports = {

    getAllClients: async (req, res) => {
        try{
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

    getOneClient: async (req, res) => {
        try{
            const id = Number(req.params.id);
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

}