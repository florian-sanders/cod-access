require('dotenv').config();
const path = require('path');
const express = require('express');
const router = require('./app/router');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();

const port = process.env.PORT || 5000;

// used by swagger
const expressSwagger = require('express-swagger-generator')(app);

// to use swagger: http://localhost(host):${port}/api-docs
let options = require('./swagger-generator.json');
options.basedir = __dirname;
options.swaggerDefinition.host = `localhost:${port}`;
expressSwagger(options);

app.use(cookieParser());

// use double submit cookie policy
const csrfProtection = csrf({
    cookie: true
});

// for every  post / patch / delete request, check whether csrf cookie token value and request header token value match
// if they match, will go to next middleware, if not, will throw an error
app.use(csrfProtection);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// express static used by react
app.use(express.static('upload'));
app.use(express.static('assets'));

// route in router
app.use('/api', router);

// if url does not start with /api, serve React app
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "assets", "index.html"));
});

app.listen(port, () => console.log(`app on http://localhost:${port}`));