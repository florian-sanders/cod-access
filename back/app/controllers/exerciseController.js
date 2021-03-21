const { ClientBase } = require('pg');
const {
    Exercise,
    Client,
    Client_exercise,
    Question,
    Possible_answer,
    Theme,
} = require('../models');

module.exports = {

    getAllExercisesWithScore: async (req, res, next) => {
        try {
            let myClient = null;
            if (req.user) {
                myClient = req.user.clientId
            }
            const exercises = await Exercise.findAndCountAll({
                where: {
                    published: true,
                },
                include: [
                    'themes',
                    {
                        association: 'clients',
                        where: {
                            id: myClient,
                        },
                        required: false,
                        attributes: { exclude: ['password', 'email', 'pseudo', 'responsibility_id', 'picture_id'] },
                    }
                ]
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

    getAllExercises: async (req, res, next) => {
        try {
            const page = Number(req.query.page) - 1 || 0;
            const limit = Number(req.query.limit) || 30;
            const role = req.user.clientRole;
            if (role !== 'admin') {
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const exercises = await Exercise.findAndCountAll({
                include: ['themes'],
                distinct: true,
                offset: page * limit,
                limit: limit,
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

    getOneExerciseVisitor: async (req, res, next) => {
        try {
            let myClient = null;
            if (req.user) {
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
                        attributes: { exclude: ['explanation'] },
                        include: [
                            {
                                association: 'possible_answers',
                                attributes: { exclude: ['correct'] },
                            },
                            'question_picture'
                        ],
                    },
                    { model: Client, as: 'clients', where: { id: myClient }, required: false }
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

    getOneExerciseAdmin: async (req, res, next) => {
        try {
            const role = req.user.clientRole;
            if (role !== 'admin') {
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
            const exercise = await Exercise.findByPk(id, {
                include: [
                    'kind',
                    'themes',
                    {
                        association: 'questions',
                        include: ['possible_answers', 'question_picture'],
                    },
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

    changeExercise: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if (role !== 'admin') {
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const data = req.body;
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const result = await Exercise.findByPk(id);
            if (data.published) {
                data.published = Boolean(data.published);
            } else {
                data.published = false
            }
            for (const properties in data) {
                if (typeof result[properties] !== 'undefined') {
                    result[properties] = data[properties];
                }
            }
            await result.save();
            console.log('200 ok', result);
            return res.status(200).json(result);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    deleteOneExercise: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if (role !== 'admin') {
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
                return res.status(404).json({
                    error: 'no exercise',
                });
            }
            await exercise.destroy({
                include: [
                    {
                        association: 'questions',
                        include: ['possible_answers', 'question_picture'],
                    },
                ],
            });
            return res.json({ message: 'exercise delete' });
        } catch (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
    },

    newExercise: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if (role !== 'admin') {
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const newExercise = new Exercise({
                title: req.body.title,
                brief: req.body.brief,
                slug: req.body.slug,
                content: req.body.content,
                published: false,
                picture_id: Number(req.body.picture_id),
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
            if (role !== 'admin') {
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
            if (req.body.picture_id) {
                req.body.picture_id = Number(req.body.picture_id)
            } else {
                req.body.picture_id = null
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

    changeQuestion: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if (role !== 'admin') {
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const data = req.body;
            if (data.picture_id) {
                data.picture_id = Number(data.picture_id);
            } else {
                data.picture_id = null
            }
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const result = await Question.findByPk(id);
            for (const properties in data) {
                if (typeof result[properties] !== 'undefined') {
                    result[properties] = data[properties];
                }
            }
            await result.save();
            console.log('200 ok', result);
            return res.status(200).json(result);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    deleteQuestion: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if (role !== 'admin') {
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
            const question = await Question.findByPk(id);

            if (!question) {
                return res.status(400).json({
                    error: 'Question does not exist'
                });
            }
            await question.destroy({
                include: [
                    'possible_answers',
                    'question_picture'
                ],
            });
            return res.json({ message: 'question delete' });

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    newAnswer: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if (role !== 'admin') {
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
                correct: Boolean(req.body.correct),
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

    changeAnswer: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if (role !== 'admin') {
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const data = req.body;
            console.log(data);
            data.correct = Boolean(data.correct)
            console.log(typeof data.correct)
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const result = await Possible_answer.findByPk(id);
            for (const properties in data) {
                if (typeof result[properties] !== 'undefined') {
                    result[properties] = data[properties];
                }
            }
            await result.save();
            console.log('200 ok', result);
            return res.status(200).json(result);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    deleteAnswer: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if (role !== 'admin') {
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
            const answer = await Possible_answer.findByPk(id);

            if (!answer) {
                return res.status(400).json({
                    error: 'Answer does not exist'
                });
            }
            await answer.destroy();
            return res.json({ message: 'answer delete' });

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    associate_exercise_theme: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if (role !== 'admin') {
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const id_exercise = Number(req.body.exercise_id)
            const id_theme = Number(req.body.theme_id)
            if ((id_exercise || id_theme) === null) {
                return res.status(406).json({
                    error: `need exercise_id and theme_id`
                });
            }
            let exercise = await Exercise.findByPk(id_exercise);
            let theme = await Theme.findByPk(id_theme)
            if (!exercise || !theme) {
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
            if (role !== 'admin') {
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const id_exercise = Number(req.body.exercise_id)
            const id_theme = Number(req.body.theme_id)
            if ((id_exercise || id_theme) === null) {
                return res.status(406).json({
                    error: `need exercise_id and theme_id`
                });
            }
            let exercise = await Exercise.findByPk(id_exercise);
            let theme = await Theme.findByPk(id_theme)
            if (!exercise || !theme) {
                return res.status(406).json({
                    error: `need exercise and theme`
                });
            }
            await exercise.removeTheme(theme);
            exercise = await Exercise.findByPk(id_exercise, {
                include: 'themes'
            })
            //console.log('200 ok', exercise);
            console.log('associate delete')
            return res.status(200).json(exercise);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    submitExercise: async (req, res, next) => {
        try {
            // console.log('req.body', req.body)
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
                        include: [{
                            association: 'possible_answers',
                            attributes: { exclude: ['content', 'correct'] },
                            where: {
                                correct: true,
                            }
                        }],
                    },
                ]
            });

            const correction = exercise.questions.map((question) => ({
                id: question.id,
                rightAnswers: question.possible_answers.map((answer) => answer.id),
                explanation: question.explanation,
            }));

            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            const successfulQuestions = [];

            for (question of correction) {
                const userAnswers = req.body.find((userData) => userData.questionId === question.id).answers;
                const countUserAnswers = userAnswers.reduce(reducer);
                const countRightAnswers = question.rightAnswers.reduce(reducer);
                // console.log('countUA', countUserAnswers);
                // console.log('countRA', countRightAnswers);
                if (countUserAnswers === countRightAnswers) {
                    successfulQuestions.push(question.id);
                }
            }
            const rightAnswers = correction.map((question) => question.rightAnswers).flat();
            const scoreResult = Math.round((successfulQuestions.length / exercise.questions.length) * 100)
            if (req.user) {
                const id_client = req.user.clientId
                const client = await Client.findByPk(id_client, {
                    include: [{ model: Exercise, as: 'exercises', where: { id: exercise.id }, required: false }],
                })

                if (!client.exercises[0]) {
                    console.log('never played i have to save');
                    // await client.addExercise(exercise);
                    const result = new Client_exercise({
                        score: scoreResult,
                        client_id: id_client,
                        exercise_id: id_exercise
                    })
                    await result.save()
                    console.log('first play', result)
                    return res.status(200).json({
                        message: `client finish with score: ${scoreResult}`,
                        correction,
                        scoreResult
                    });

                } else {
                    console.log('played already i have to update');
                    const oldScore = client.exercises[0].Client_exercise.score
                    if (oldScore === null || oldScore < scoreResult) {
                        const updateScore = await Client_exercise.findOne({
                            where: { client_id: id_client, exercise_id: id_exercise }
                        })
                        await updateScore.update({ score: scoreResult })
                        console.log('already played and update because better score', oldScore, updateScore)
                        return res.status(200).json({
                            message: `client finish with score: ${scoreResult}`,
                            correction,
                            explanation,
                        });

                    } else {
                        console.log('older score was better im doing nothing')
                        return res.status(200).json({
                            message: `client finish with score: ${scoreResult}`,
                            correction,
                            scoreResult,
                        });
                    }
                }
            };

            console.log('score du user sans co', scoreResult);
            return res.status(200).json({
                message: `client finish with score: ${scoreResult}`,
                correction,
                scoreResult,
            });

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
}