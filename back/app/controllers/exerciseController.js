const {
    Exercise,
    Client
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
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const exercise = await Exercise.findByPk(id, {
                include: [
                    'kind',
                    'themes',
                    {
                        association: 'questions',
                        include: ['possible_answers', 'question_picture'],
                    },
                    {model:Client, as:'clients',where:{id: req.user.clientId},required:false}
                ],
               
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
            const role = req.user.clientRole
            if(role !== 'admin'){
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
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

    newExercise: async (req, res, next) => {
        
        try {
            const role = req.user.clientRole
            if(role !== 'admin'){
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            // const newExercise = new Exercise({
            //     title: req.body.title,
            //     brief: req.body.brief,
            //     slug: req.body.slug,
            //     content: req.body.content,
            //     published: req.body.published,
            //     picture_id: req.body.picture_id,
            // });
            // await newExercise.save();
            console.log('200 ok');
            return res.status(200).json('ok');
        
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
}