const express = require('express');

const router = express.Router();

const clientController = require('./controllers/clientController');
const authController = require('./controllers/authController');
const exerciseController = require('./controllers/exerciseController');
const themeController = require('./controllers/themeController');

const jwt = require('express-jwt');
const jwtSecret = 'OurSuperLongRandomSecretToSignOurJWTgre5ezg4jyt5j4ui64gn56bd4sfs5qe4erg5t5yjh46yu6knsw4q';
const authorizationMiddleware = jwt({ secret: jwtSecret, algorithms: ['HS256'] });

router.route('/clients')
    .get(clientController.getAllClients);

router.route('/profile')
    .get(authorizationMiddleware, clientController.getOneClient);

router.route('/signin')
    .post(authController.submitLoginForm);

router.route('/signup')
    .post(authController.submitSignupForm);

router.route('/contact')
    .post(authController.submitContact);

router.route('/exercises')
    .get(exerciseController.getAllExercises);
 
router.route('/exercises/:id')
    .get(exerciseController.getOneExercise);

router.route('/themes_exercises')
    .get(themeController.getAllThemesForExercises);   
    
router.route('/themes')
    .get(themeController.getAllThemes);   

module.exports = router;