const express = require('express');

const router = express.Router();

const clientController = require('./controllers/clientController');
const authController = require('./controllers/authController');

router.route('/clients')
    .get(clientController.getClients)

router.route('/signin')
    .post(authController.submitLoginForm)

module.exports = router;