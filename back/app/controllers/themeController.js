const { Theme, Client } = require('../models');

/**
 * @module themeController
 */
module.exports = {

    getAllThemesForExercises: async (req, res, next) => {
        try{
            let clientId = null;
            if (req.user) {
                clientId = req.user.clientId
            }
            const themes = await Theme.findAll({
                include: [
                    {
                        association: 'exercises',
                        where:{published: true},
                        attributes: { exclude: ['brief', 'published', 'exercise_theme'] },
                        include: [ 
                            {
                                model: Client, as: 'clients', where: { id: clientId },
                                required: false,
                                attributes: { exclude: ['password', 'responsibility_id', 'picture_id'] },
                            },
                        ],
                    },
                ]
            });
            return res.status(200).json(
                themes
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
    
    getScoreByTheme: async (req, res, next) => {
        try{
            let clientId = null;
            if (req.user) {
                clientId = req.user.clientId
            }
            const themes = await Theme.findAll({
                include: [
                    {
                        association: 'exercises',
                        where:{published: true},
                        attributes: { exclude: ['brief', 'published', 'exercise_theme'] },
                        include: [ 
                            {   
                                model: Client, as: 'clients', where: { id: clientId },
                                required: false,
                                attributes: { exclude: ['password', 'responsibility_id', 'picture_id'] },
                            },
                        ],
                    },
                ]
            });
            let progressUser = [];
            for (const theme of themes){
                const numberOfExercises = theme.exercises.length
                let exerciseComplete = 0;
                for (const exercise of theme.exercises){
                    if(exercise.clients[0]){
                        const score = exercise.clients[0].Client_exercise.score
                        if(score === 100){
                            exerciseComplete++
                        }
                    }
                }
                const progress = Math.round((exerciseComplete/numberOfExercises)*100) 
                progressUser.push({theme: theme.name, color: theme.color, progress: progress})
            }
            console.log('progressUser', progressUser)
            return res.status(200).json(
                progressUser
            );
            
        } catch(error) {
            console.error(error);
            return res.status(500);
        }
    },

}