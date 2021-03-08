const { Theme, Exercise } = require('../models');

module.exports = {

    getAllThemesForExercises: async (req, res, next) => {
        try{
            const theme = await Theme.findAll({
                include: [{model:Exercise, as: 'exercises',where:{published: true}}]
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

    getAllThemes: async (req, res, next) => {
        try{
            const theme = await Theme.findAll();
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