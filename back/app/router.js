const express = require('express');

const router = express.Router();

const clientController = require('./controllers/clientController');
const authController = require('./controllers/authController');
const exerciseController = require('./controllers/exerciseController');

router.route('/clients')
    .get(clientController.getAllClients);

router.route('/profile/:id')
    .get(clientController.getOneClient);

router.route('/signin')
    .post(authController.submitLoginForm);

router.route('/signup')
    .post(authController.submitSignupForm);

router.route('/exercises')
    .get(exerciseController.getAllExercises);

module.exports = router;