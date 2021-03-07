const express = require('express');
const router = express.Router();

const clientController = require('./controllers/clientController');
const authController = require('./controllers/authController');
const exerciseController = require('./controllers/exerciseController');
const themeController = require('./controllers/themeController');
const docController = require('./controllers/docController');
const swaggerController = require('./controllers/swaggerController');

const jwt = require('express-jwt');
const jwtSecret = process.env.JWTSECRET;
const algorithmsJWT = process.env.JWTALGO;
// middleware checking JWT. JWT is stored into httpOnly cookie.
// If token is valid, will go to next middleware, if not, will throw an error.
const authorizationMiddleware = jwt({
    secret: jwtSecret,
    algorithms: [algorithmsJWT],
    getToken: (req) => req.cookies.token,
});

// route used by the React App upon loading to retrieve a csrf token.
// this token will be sent into a cookie as well as a header set by the React App
// the csrf middleware in the entry file of the server is in charge of checking
// that both the tokens (sent in cookie + sent in header) are a match.
// This is to ensure the React App is the source of the request.
router.route('/csrf-token')
    .get(authController.getCSRFToken);

router.route('/signout')
    .get(authController.signout);

router.route('/clients')
    .get(clientController.getAllClients);

router.route('/clients/:id')
    .delete(clientController.deleteOneClient);

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

router.route('/exercises/dragndrop/:id')
    .get(exerciseController.getOneExercise);

router.route('/exercises/dragndrop/:id')
    .delete(exerciseController.deleteOneExercise);

router.route('/themes_exercises')
    .get(themeController.getAllThemesForExercises);

router.route('/themes')
    .get(themeController.getAllThemes);

router.route('/docs')
    .get(docController.getAllDocs);

router.route('/docs/:id')
    .get(docController.getOneDoc);

router.route('/docs/:id/client')
    .post(docController.addDocToClient);

router.route('/docs/:id')
    .patch(docController.changeOneDoc);

router.route('/published_docs')
    .get(docController.getAllDocsPublished);

router.route('/docs/:id')
    .delete(docController.deleteOneDoc);

router.route('/docs/new')
    .post(docController.newDoc);

// route used to see all the API in swagger
router.route('/getAllAPI')
    .get(swaggerController.getAllAPI);

module.exports = router;