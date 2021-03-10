const {
    Exercise,
    Client,
    Client_exercise,
    Question,
    Possible_answer,
    Theme
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
            let myClient = null;
            if(req.user){
                myClient = req.user.clientId
            }
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
                    {model:Client, as:'clients',where:{id: myClient},required:false}
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
            const newExercise = new Exercise({
                title: req.body.title,
                brief: req.body.brief,
                slug: req.body.slug,
                content: req.body.content,
                published: req.body.published,
                picture_id: req.body.picture_id,
            });
            await newExercise.save();
            console.log('200 ok');
            return res.status(200).json(newExercise);
        
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    newQuestion: async (req, res, next) => {
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
            const newQuestion = new Question({
                brief: req.body.brief,
                code: req.body.code,
                explanation: req.body.explanation,
                exercise_id: id,
                picture_id: req.body.picture_id,
            });
            await newQuestion.save();
            console.log('200 ok');
            return res.status(200).json(newQuestion);
        
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    newAnswer: async (req, res, next) => {
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
            const newAnswer = new Possible_answer({
                content: req.body.content,
                correct: req.body.correct,
                question_id: id,
            });
            await newAnswer.save();
            console.log('200 ok');
            return res.status(200).json(newAnswer);
        
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
    
    associate_exercise_theme: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if(role !== 'admin'){
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const id_exercise = Number(req.body.exercise_id)
            const id_theme = Number(req.body.theme_id)
            if((id_exercise || id_theme) === null){
                return res.status(406).json({
                    error: `need exercise_id and theme_id`
                });
            }
            let exercise = await Exercise.findByPk(id_exercise);
            let theme = await Theme.findByPk(id_theme)
            if(!exercise || !theme){
                return res.status(406).json({
                            error: `need exercise and theme`
                        });
            }
            await exercise.addTheme(theme);
            exercise = await Exercise.findByPk(id_exercise, {
                include: 'themes'
            })
            console.log('200 ok', exercise);
            return res.status(200).json(exercise);
        
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
    
    delete_exercise_theme: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if(role !== 'admin'){
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const id_exercise = Number(req.body.exercise_id)
            const id_theme = Number(req.body.theme_id)
            if((id_exercise || id_theme) === null){
                return res.status(406).json({
                    error: `need exercise_id and theme_id`
                });
            }
            let exercise = await Exercise.findByPk(id_exercise);
            let theme = await Theme.findByPk(id_theme)
            if(!exercise || !theme){
                return res.status(406).json({
                            error: `need exercise and theme`
                        });
            }
            await exercise.removeTheme(theme);
            exercise = await Exercise.findByPk(id_exercise, {
                include: 'themes'
            })
            console.log('200 ok', exercise);
            return res.status(200).json(exercise);
        
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
    
    submitExercise: async (req, res, next) => {
        try {
            console.log('req.body', req.body)
            const id_exercise = Number(req.params.id);
            if (isNaN(id_exercise)) {
                console.log('not id')
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const exercise = await Exercise.findByPk(id_exercise, {
                include: [
                   'clients',
                {
                    association: 'questions',
                    include: ['possible_answers'],
                },
            ]
            })
            let correct_answers = [];
            let wrong_answers = [];
            for (const questions of exercise.questions){
                for (const answers of questions.possible_answers){
                    if(answers.correct === true){
                        correct_answers.push(answers.id)
                    }else{
                        wrong_answers.push(answers.id)
                    }
                }
            }
            let correct=[]
            let incorrect=[]
            for (const question of req.body){
                const iscorrect = correct_answers.find(e=>e===question.answers[0])
                if (iscorrect){
                    correct.push(question)
                  }else{
                    incorrect.push(question)
                  }
            }
            console.log('correct', correct)
            console.log('incorrect', incorrect)
            const scoreResult = Math.round((correct.length/exercise.questions.length)*100)
            if(req.user){
                const id_client = req.user.clientId
                const client = await Client.findByPk(id_client, {
                    include: 'exercises'
                })
                await client.addExercise(exercise);

                const exerciseAlreadyDone = client.exercises.find(e=>e.id===id_exercise)
                if(exerciseAlreadyDone){

                }
                const oldScore = exerciseAlreadyDone.Client_exercise.score
                if(scoreResult > oldScore){
                    const result = new Client_exercise({
                        score: scoreResult,
                        client_id: id_client,
                        exercise_id: id_exercise
                    })
                    await result.save()
                    return res.status(200).json(`client finish with score: ${scoreResult}`,
                    correct,
                    incorrect,
                    client);
                }
            };
            console.log('200 ok');
            return res.status(200).json(`client finish with score: ${scoreResult}`,correct,incorrect);
        
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
}