const { Client } = require('../models');
module.exports = {

    test : async (req, res) => {
        try{
            const id = req.user.id
            const client = await Client.findByPk(id)
            console.log(client,'je suis la')
            res.json(client)
        }     
         catch(error) {
            console.error(error);
            return res.status(500);
        }
     
    },

}