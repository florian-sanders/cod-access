const { Client } = require('../models');

module.exports = {

    getClients: async (request, response, next) => {
        try{
            const clients = await Client.findAll()
            //.json car sequalize
            const get = response.json(clients)
            console.log(get)
        } catch(error) {
                console.error(error)
        }
        

    },

}