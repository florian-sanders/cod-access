const express = require('express');
const router = express.Router();

const clientController = require('./controllers/clientController');
const authController = require('./controllers/authController');
const exerciseController = require('./controllers/exerciseController');
const themeController = require('./controllers/themeController');
const imageController = require('./controllers/imageController');
const multerConfig = require('./middleware/multer-config');

/**
 * @function sanitizer - used to filter any dirty html
 */
const sanitizer = require('./middleware/bodySanitizer');

/**
 * @function isAdmin - used to check if the user is an admin
 */
const isAdmin = require('./middleware/isAdmin');

/**
 * @module jwt - used to check the token validity,
 * jwtSecret and algorithmsJWT are required to setup,
 * jwt is stored into httpOnly cookie,
 * If token is valid, will go to next middleware, if not, will throw an error
 */
const jwt = require('express-jwt');
const jwtSecret = process.env.JWTSECRET;
const algorithmsJWT = process.env.JWTALGO;
/**
 * @function authorizationMiddlewareLetPass - used to check the token but let pass everyone if the token is not present by the line credentialsRequired: false
 */
const authorizationMiddlewareLetPass = jwt({
    secret: jwtSecret,
    algorithms: [algorithmsJWT],
    credentialsRequired: false,
    getToken: (req) => req.cookies.token,
});
/**
 * @function authorizationMiddlewareNotPass - used to check the token and stop everyone if the token is not valid
 */
const authorizationMiddlewareNotPass = jwt({
    secret: jwtSecret,
    algorithms: [algorithmsJWT],
    getToken: (req) => req.cookies.token,
});
/**
 * @function authorizationMiddlewareNewPassword - used to check the token in the headers and stop everyone if the token is not valid
 */
const authorizationMiddlewareNewPassword = jwt({
    secret: jwtSecret,
    algorithms: [algorithmsJWT],
});

/**
 * road used by the React App upon loading to retrieve a csrf token,
 * this token will be sent into a cookie as well as a header set by the React App,
 * the csrf middleware in the entry file of the server is in charge of checking 
 * that both the tokens (sent in cookie + sent in header) are a match,
 * this is to ensure the React App is the source of the request
 * @route GET /csrf-token
 * @group auth - authorisation about client
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.route('/csrf-token')
    .get(authController.getCSRFToken);

/**
 * @route DELETE /admin/image/:imageId
 * @group picture - picture controle
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/admin/image/:imageId')
    .delete(authorizationMiddlewareNotPass, sanitizer, isAdmin, imageController.deleteOneImage);

/**
 * @route GET /signout
 * @group auth - authorisation about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/signout')
    .get(authController.signout);

/**
 * @route GET /clients
 * @group client - everythings about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/clients')
    .get(authorizationMiddlewareNotPass, isAdmin, clientController.getAllClients);

/**
 * @route PATCH /clients/:id
 * @group client - everythings about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route DELETE /clients/:id
 * @group client - everythings about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
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


/**
 * @route POST /signin
 * @group auth - authorisation about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/signin')
    .post(sanitizer, authController.submitLoginForm);

/**
 * @route POST /upload_client
 * @group client - everythings about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/upload_client')
    .post(authorizationMiddlewareNotPass, sanitizer, multerConfig.imageToClient, clientController.getOneClient);

/**
 * @route POST /upload_question
 * @group picture - picture controle
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/upload_question')
    .post(authorizationMiddlewareNotPass, sanitizer, isAdmin, multerConfig.imageToQuestion);

/**
 * @route PATCH /images/:imageId
 * @group picture - picture controle
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/images/:imageId')
    .patch(authorizationMiddlewareNotPass, sanitizer, isAdmin, imageController.changeImageAlt);


/**
 * @route POST /signup
 * @group auth - authorisation about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/signup')
    .post(authController.submitSignupForm);

/**
 * @route POST /contact
 * @group auth - authorisation about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/contact')
    .post(sanitizer, authController.submitContact);

/**
 * @route GET /exercises
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/exercises')
    .get(authorizationMiddlewareNotPass, isAdmin, exerciseController.getAllExercises);

/**
 * @route GET /exercises_score
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/exercises_score')
    .get(authorizationMiddlewareNotPass, exerciseController.getAllExercisesWithScore);

/**
 * @route GET /exercises/dragndrop/:id
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route POST /exercises/dragndrop/:id
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/exercises/dragndrop/:id')
    .get(authorizationMiddlewareLetPass, exerciseController.getOneExerciseVisitor)
    .post(authorizationMiddlewareLetPass, exerciseController.submitExercise);

/**
 * @route GET /themes_exercises
 * @group themes - all themes for exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/themes_exercises')
    .get(authorizationMiddlewareLetPass, themeController.getAllThemesForExercises);

/**
 * @route GET /themes_score
 * @group themes - all themes for exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/themes_score')
    .get(authorizationMiddlewareNotPass, themeController.getScoreByTheme);

/**
 * @route GET /themes
 * @group themes - all themes for exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/themes')
    .get(themeController.getAllThemes);

/**
 * create exercise
 * @route POST /admin/exercises/new_exercise
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/admin/exercises/new_exercise')
    .post(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.newExercise);

/**
 * create question
 * @route POST /admin/exercises/new_question/:id
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route PATCH /admin/exercises/new_question/:id
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route DELETE /admin/exercises/new_question/:id
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/admin/exercises/new_question/:id')
    .post(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.newQuestion)
    .patch(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.changeQuestion)
    .delete(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.deleteQuestion);

/**
 * create answer
 * @route POST /admin/exercises/new_answer/:id
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route PATCH /admin/exercises/new_answer/:id
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route DELETE /admin/exercises/new_answer/:id
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/admin/exercises/new_answer/:id')
    .post(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.newAnswer)
    .patch(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.changeAnswer)
    .delete(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.deleteAnswer);

/**
 * create assosiation exercise/theme
 * @route POST /admin/exercises/associate_exercise_theme
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route DELETE /admin/exercises/associate_exercise_theme
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/admin/exercises/associate_exercise_theme')
    .post(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.associate_exercise_theme)
    .delete(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.delete_exercise_theme);

/**
 * @route GET /admin/exercises/:id
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route PATCH /admin/exercises/:id
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route DELETE /admin/exercises/:id
 * @group exercise - gestion exercises
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/admin/exercises/:id')
    .get(authorizationMiddlewareNotPass, isAdmin, exerciseController.getOneExerciseAdmin)
    .patch(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.changeExercise)
    .delete(authorizationMiddlewareNotPass, sanitizer, isAdmin, exerciseController.deleteOneExercise);

/**
 * forget password client
 * @route POST /forget
  * @group auth - authorisation about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * 
 * @route PATCH /forget
 * @group auth - authorisation about client
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.route('/forget')
    .post( sanitizer, authController.forgetPassword)
    .patch(authorizationMiddlewareNewPassword, sanitizer, authController.newPassword);

module.exports = router;