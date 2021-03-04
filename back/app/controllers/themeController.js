const { Theme } = require('../models');

module.exports = {

    getAllThemes: async (req, res, next) => {
        try{
            const theme = await Theme.findByPk(1,{
                include: ['exercises','docs']
              });
            console.log('theme', theme);
            return res.status(200).json(
            theme
            );
        } catch(error) {
            console.error(error);
            return res.status(500);
        }
    },

}