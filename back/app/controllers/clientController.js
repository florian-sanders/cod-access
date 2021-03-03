const { Client } = require('../models');

module.exports = {

    getClients: async (req, res, next) => {
        try{
            const clients = await Client.findAll()
            //.json car sequalize
            const get = res.json(clients)
            console.log(get)
        } catch(error) {
                console.error(error)
        }
    },
}