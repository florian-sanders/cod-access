const {
    Exercise,
    Question
} = require('../models');

module.exports = {

    getAllExercises: async (req, res, next) => {
        try {
            const exercises = await Exercise.findAll({
                include: ['kind', 'clients', 'themes']
            });
            console.log('exercises', exercises);
            return res.status(200).json(
                exercises
            );
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    getOneExercise: async (req, res, next) => {
        try {
            //const id = Number(req.user.exerciseId);
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const exercise = await Exercise.findByPk(id, {

                include: ['kind', 'clients', 'themes']
=======
                // association des reponses possible aux questions de l'exercice ciblé
                include: [
                    'kind',
                    'clients',
                    'themes',
                    {
                        association: 'questions',
                        include: ['possible_answers'],
                    }
                ]

            });
            console.log('exercise', exercise);
            return res.status(200).json(
                exercise
            );
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    deleteOneExercise: async (req, res, next) => {
        try {
            //const id = Number(req.user.exerciseId);
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const exercise = await Exercise.findByPk(id);
            
            if (!exercise) {
                throw new Error('Exercise does not exist');
            }
            await exercise.destroy();
            return res.json('exercise delete');
        } catch (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
    },
}