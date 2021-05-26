const {
    Exercise,
    Client,
    Client_exercise,
    Question,
    Possible_answer,
    Theme,
    Picture,
} = require('../models');

/**
 * @module exerciseController
 */
module.exports = {

    getAllExercisesWithScore: async (req, res, next) => {
        try {
            let clientId = null;
            if (req.user) {
                clientId = req.user.clientId
            }
            const exercises = await Exercise.findAll({
                where: {
                    published: true,
                },
                include: [
                    'themes',
                    {
                        association: 'clients',
                        where: {
                            id: clientId,
                        },
                        required: false,
                        attributes: { exclude: ['password', 'email', 'pseudo', 'responsibility_id', 'picture_id'] },
                    }
                ]
            });
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
            const exercises = await Exercise.findAndCountAll({
                include: ['themes'],
                order: [['created_at', 'ASC']],
                distinct: true,
                offset: page * limit,
                limit: limit,
            });
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
            let clientId = null;
            if (req.user) {
                clientId = req.user.clientId
            }
            /** @name id - id of exercise */
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(406).json({
                    errorType: 406,
                    message: `the provided id must be a number`
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
                    { model: Client, as: 'clients', where: { id: clientId }, required: false }
                ],
                order: [[{ model: Question, as: 'questions' }, 'created_at', 'ASC']]
            });
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
            /** @name id - id of exercise */
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(406).json({
                    errorType: 406,
                    message: `the provided id must be a number`
                });
            }
            const exercise = await Exercise.findByPk(id, {
                include: [
                    'kind',
                    'themes',
                    {
                        association: 'questions',
                        include: ['possible_answers', 'question_picture'],
                        order: [[{ model: Possible_answer, as: 'possible_answers' }, 'created_at', 'ASC']]
                    },
                ],
                order: [[{ model: Question, as: 'questions' }, 'created_at', 'ASC']]
            });
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
            const dataExercise = req.body;
            /** @name id - id of exercise */
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(406).json({
                    errorType: 406,
                    error: `the provided id must be a number`
                });
            }
            const exercise = await Exercise.findByPk(id);
            if (dataExercise.published) {
                dataExercise.published = JSON.parse(dataExercise.published.toLowerCase());
            } else {
                dataExercise.published = false
            }
            for (const properties in dataExercise) {
                if (typeof exercise[properties] !== 'undefined') {
                    exercise[properties] = dataExercise[properties];
                }
            }
            await exercise.save();
            return res.status(200).json(exercise);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    deleteOneExercise: async (req, res, next) => {
        try {
            /** @name id - id of exercise */
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(406).json({
                    errorType: 406,
                    message: `the provided id must be a number`
                });
            }
            const exercise = await Exercise.findByPk(id);

            if (!exercise) {
                return res.status(404).json({
                    errorType: 404,
                    message: 'miss exercise',
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
            return res.json({ message: 'exercise deleted' });
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    newExercise: async (req, res, next) => {
        try {
            const newExercise = new Exercise({
                title: req.body.title,
                brief: req.body.brief,
                slug: req.body.slug,
                content: req.body.content,
                published: false,
                picture_id: Number(req.body.picture_id),
            });
            await newExercise.save();
            return res.status(200).json(newExercise);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    newQuestion: async (req, res, next) => {
        try {
            /** @name id - id of exercise */
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(406).json({
                    errorType: 406,
                    message: `the provided id must be a number`
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
            return res.status(200).json(newQuestion);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    changeQuestion: async (req, res, next) => {
        try {
            const dataQuestion = req.body;
            if (dataQuestion.picture_id) {
                dataQuestion.picture_id = Number(dataQuestion.picture_id);
            } else {
                dataQuestion.picture_id = null
            }
            /** @name id - id of question */
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(406).json({
                    errorType: 406,
                    message: `the provided id must be a number`
                });
            }
            const question = await Question.findByPk(id);
            for (const properties in dataQuestion) {
                if (typeof question[properties] !== 'undefined') {
                    question[properties] = dataQuestion[properties];
                }
            }
            await question.save();
            return res.status(200).json(question);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    deleteQuestion: async (req, res, next) => {
        try {
            /** @name id - id of question */
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(406).json({
                    errorType: 406,
                    message: `the provided id must be a number`
                });
            }
            const question = await Question.findByPk(id);

            if (!question) {
                return res.status(404).json({
                    errorType: 404,
                    message: 'question does not exist'
                });
            }
            await question.destroy({
                include: [
                    'possible_answers',
                    'question_picture'
                ],
            });
            return res.json({ message: 'question deleted' });

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    newAnswer: async (req, res, next) => {
        try {
            /** @name id - id of question */
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(406).json({
                    errorType: 406,
                    message: `the provided id must be a number`
                });
            }
            const newAnswer = new Possible_answer({
                content: req.body.content,
                correct: JSON.parse(req.body.correct.toLowerCase()) || false,
                question_id: id,
            });
            await newAnswer.save();
            return res.status(200).json(newAnswer);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    changeAnswer: async (req, res, next) => {
        try {
            const dataAnswer = req.body;
            dataAnswer.correct = JSON.parse(dataAnswer.correct.toLowerCase());
            /** @name id - id of answer */
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(406).json({
                    errorType: 406,
                    message: `the provided id must be a number`
                });
            }
            const answer = await Possible_answer.findByPk(id);
            for (const properties in dataAnswer) {
                if (typeof answer[properties] !== 'undefined') {
                    answer[properties] = dataAnswer[properties];
                }
            }
            await answer.save();
            return res.status(200).json(answer);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    deleteAnswer: async (req, res, next) => {
        try {
            /** @name id - id of answer */
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(406).json({
                    errorType: 406,
                    message: `the provided id must be a number`
                });
            }
            const answer = await Possible_answer.findByPk(id);

            if (!answer) {
                return res.status(404).json({
                    errorType: 404,
                    message: 'answer does not exist'
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
            const exerciseId = Number(req.body.exercise_id)
            const themeId = Number(req.body.theme_id)
            if ((exerciseId || themeId) === null) {
                return res.status(406).json({
                    errorType: 406,
                    message: `need exercise_id and theme_id`
                });
            }
            let exercise = await Exercise.findByPk(exerciseId);
            let theme = await Theme.findByPk(themeId)
            if (!exercise || !theme) {
                return res.status(406).json({
                    errorType: 406,
                    message: `need exercise and theme`
                });
            }
            await exercise.addTheme(theme);
            exercise = await Exercise.findByPk(exerciseId, {
                include: 'themes'
            })
            return res.status(200).json(exercise);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    delete_exercise_theme: async (req, res, next) => {
        try {
            const exerciseId = Number(req.body.exercise_id)
            const themeId = Number(req.body.theme_id)
            if ((exerciseId || themeId) === null) {
                return res.status(406).json({
                    errorType: 406,
                    message: `need exercise_id and theme_id`
                });
            }
            let exercise = await Exercise.findByPk(exerciseId);
            let theme = await Theme.findByPk(themeId)
            if (!exercise || !theme) {
                return res.status(406).json({
                    errorType: 406,
                    message: `need exercise and theme`
                });
            }
            await exercise.removeTheme(theme);
            exercise = await Exercise.findByPk(exerciseId, {
                include: 'themes'
            })
            return res.status(200).json(exercise);

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    submitExercise: async (req, res, next) => {
        try {
            const exerciseId = Number(req.params.id);
            if (isNaN(exerciseId)) {
                return res.status(406).json({
                    errorType: 406,
                    message: `the provided id must be a number`
                });
            }

            const exercise = await Exercise.findByPk(exerciseId, {
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

                // first check if user has selected as many answers as there are correct answers
                if (userAnswers.length === question.rightAnswers.length) {

                    // then check if user answers match right answers by summing up their ids
                    const sumUserAnswerIds = userAnswers.reduce(reducer);
                    const sumRightAnswerIds = question.rightAnswers.reduce(reducer);
                    // if sums are equal, save the question id so that we know how many questions the user got right
                    if (sumUserAnswerIds === sumRightAnswerIds) {
                        successfulQuestions.push(question.id);
                    }
                }
            }

            if (req.user) {
                const clientId = req.user.clientId
                const client = await Client.findByPk(clientId, {
                    include: [{ model: Exercise, as: 'exercises', where: { id: exercise.id }, required: false }],
                });

                // If user has never played this exercise, directly save their score
                if (!client.exercises[0]) {
                    const result = new Client_exercise({
                        score: scoreResult,
                        client_id: clientId,
                        exercise_id: exerciseId
                    });

                    await result.save()
                } else {
                    // If user has already played this exercise, compare scores and save if score is better than old score
                    const oldScore = client.exercises[0].Client_exercise.score;

                    if (oldScore === null || oldScore < scoreResult) {
                        const updateScore = await Client_exercise.findOne({
                            where: { client_id: clientId, exercise_id: exerciseId }
                        });

                        //the new score is the best, we save it
                        await updateScore.update({ score: scoreResult });
                    }
                }
            }

            // return the score with correction
            return res.status(200).json({
                message: `user finish with score: ${scoreResult}`,
                correction,
                scoreResult,
            });

        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    addImageToQuestion: async (req, res, next) => {
        try {
            const questionId = Number(req.body.question_id);
            const myFile = req.file;
            const pathPicture = myFile.path.substring(6);
            const picture = new Picture({
                name: myFile.filename,
                path: pathPicture,
                alternative: req.body.alternative,
            })

            picture.save().then(result => {
                Question.findByPk(questionId, {
                    include: 'question_picture'
                }).then(question => {
                    question.update({ picture_id: result.id })
                    return res.status(200).json(
                        {
                            pictureId: result.id,
                            picturePath: result.path,
                            pictureAlt: result.alternative
                        }
                    );
                })
            })
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    }
}