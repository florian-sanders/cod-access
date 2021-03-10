const data = require('../../data/swagger')

module.exports = {

    getAllAPI : async (req, res) => {
        try{
            res.status(200).json(
               data
                );
                
            } catch(error) {
                console.error(error);
                return res.status(500);
            }
    },

}