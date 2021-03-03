const express = require('express');

const router = express.Router();

const mainController = require('./controllers/mainController');

router.route('/')
    .get(mainController.home)

module.exports = router;