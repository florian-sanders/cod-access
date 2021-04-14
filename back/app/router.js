const express = require('express');
const router = express.Router();

const clientController = require('./controllers/clientController');
const authController = require('./controllers/authController');
const exerciseController = require('./controllers/exerciseController');
const themeController = require('./controllers/themeController');
const swaggerController = require('./controllers/swaggerController');
const imageController = require('./controllers/imageController');
const multerConfig = require('./middleware/multer-config');

// used to filter any dirty html
const sanitizer = require('./middleware/body-sanitizer');

// used to check if the user is an admin
const isAdmin = require('./middleware/is-admin');

const jwt = require('express-jwt');
const jwtSecret = process.env.JWTSECRET;
const algorithmsJWT = process.env.JWTALGO;
// middleware checking JWT. JWT is stored into httpOnly cookie.
// If token is valid, will go to next middleware, if not, will throw an error.
// credentialsRequired only if i want let pass everyone
// if only client connect delete the line credentialsRequired
const authorizationMiddlewareLetPass = jwt({
    secret: jwtSecret,
    algorithms: [algorithmsJWT],
    credentialsRequired: false,
    getToken: (req) => req.cookies.token,
});

const authorizationMiddlewareNotPass = jwt({
    secret: jwtSecret,
    algorithms: [algorithmsJWT],
    getToken: (req) => req.cookies.token,
});

const authorizationMiddlewareNewPassword = jwt({
    secret: jwtSecret,
    algorithms: [algorithmsJWT],
});

// route used by the React App upon loading to retrieve a csrf token.
// this token will be sent into a cookie as well as a header set by the React App
// the csrf middleware in the entry file of the server is in charge of checking
// that both the tokens (sent in cookie + sent in header) are a match.
// This is to ensure the React App is the source of the request.
router.route('/csrf-token')
    .get(authController.getCSRFToken);

router.route('/admin/image/:imageId')
    .delete(authorizationMiddlewareNotPass, sanitizer, isAdmin, imageController.deleteOneImage);

router.route('/signout')
    .get(authController.signout);

router.route('/clients')
    .get(authorizationMiddlewareNotPass, isAdmin, clientController.getAllClients);

router.route('/clients/:id')
    .patch(authorizationMiddlewareNotPass, sanitizer, isAdmin, clientController.changeRoleClient)
    .delete(authorizationMiddlewareNotPass, sanitizer, isAdmin, clientController.deleteOneClient);

/**
 * Road used by the user to see/change/delete his profile.
 * @route GET /profile
 * @group client - everythings about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route PATCH /profile
 * @group client - everythings about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route DELETE /profile
 * @group client - everythings about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/profile')
    .get(authorizationMiddlewareNotPass, clientController.getOneClient)
    .patch(authorizationMiddlewareNotPass, sanitizer, clientController.updateClient)
    .delete(authorizationMiddlewareNotPass, sanitizer, clientController.deleteProfileClient);

router.route('/signin')
    .post(sanitizer, authController.submitLoginForm);

router.route('/upload_client')
    .post(authorizationMiddlewareNotPass, sanitizer, multerConfig.imageToClient, clientController.getOneClient);

router.route('/upload_question')
    .post(authorizationMiddlewareNotPass, sanitizer, isAdmin, multerConfig.imageToQuestion);

router.route('/images/:imageId')
    .patch(authorizationMiddlewareNotPass, sanitizer, isAdmin, imageController.changeImageAlt);

router.route('/signup')
    .post(authController.submitSignupForm);

router.route('/contact')
    .post(sanitizer, authController.submitContact);

router.route('/exercises')
    .get(authorizationMiddlewareNotPass, isAdmin, exerciseController.getAllExercises);

router.route('/exercises_score')
    .get(authorizationMiddlewareNotPass, exerciseController.getAllExercisesWithScore);

router.route('/exercises/dragndrop/:id')
    .get(authorizationMiddlewareLetPass, exerciseController.getOneExerciseVisitor)
    .post(authorizationMiddlewareLetPass, exerciseController.submitExercise);

router.route('/themes_exercises')
    .get(authorizationMiddlewareLetPass, themeController.getAllThemesForExercises);

router.route('/themes_score')
    .get(authorizationMiddlewareNotPass, themeController.getScoreByTheme);

router.route('/themes')
    .get(themeController.getAllThemes);

// create exercise
router.route('/admin/exercises/new_exercise')
    .post(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.newExercise);

// create question
router.route('/admin/exercises/new_question/:id')
    .post(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.newQuestion)
    .patch(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.changeQuestion)
    .delete(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.deleteQuestion);

// create answer
router.route('/admin/exercises/new_answer/:id')
    .post(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.newAnswer)
    .patch(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.changeAnswer)
    .delete(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.deleteAnswer);

// create assosiation exercise/theme
router.route('/admin/exercises/associate_exercise_theme')
    .post(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.associate_exercise_theme)
    .delete(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.delete_exercise_theme);

router.route('/admin/exercises/:id')
    .get(authorizationMiddlewareNotPass, isAdmin, exerciseController.getOneExerciseAdmin)
    .patch(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.changeExercise)
    .delete(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.deleteOneExercise);

// forget password client
router.route('/forget')
    .post( sanitizer, authController.forgetPassword)
    .patch(authorizationMiddlewareNewPassword, sanitizer, authController.newPassword);

// road used to see all the API with swagger
router.route('/getAllAPI')
    .get(swaggerController.getAllAPI);

module.exports = router;