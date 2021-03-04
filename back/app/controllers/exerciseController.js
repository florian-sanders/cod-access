const { Exercise } = require('../models');

module.exports = {

    getAllExercises: async (req, res, next) => {
        try{
            const exercises = await Exercise.findAll();
            console.log('exercises', exercises);
            return res.status(200).json(
            exercises
            );
        } catch(error) {
            console.error(error);
            return res.status(500);
        }
    },

}