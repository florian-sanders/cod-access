const { Theme, Exercise, Client } = require('../models');

module.exports = {

    getAllThemesForExercises: async (req, res, next) => {
        try{
            let myClient = null;
            if (req.user) {
                myClient = req.user.clientId
            }
            const theme = await Theme.findAll({
                include: [
                    {model:Exercise, as: 'exercises',where:{published: true}},
                    {
                        association: 'exercises',
                        include: [ {model: Client, as: 'clients', where: { id: myClient }, required: false}],
                    },
                ]
            });
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
            return res.status(200).json(
            theme
            );

        } catch(error) {
            console.error(error);
            return res.status(500);
        }
    },

}