require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const csrf = require('csurf');


const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()
console.log('process.env.PG_URL', process.env.PG_URL)

const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));

app.use(cookieParser());

// use double submit cookie policy
const csrfProtection = csrf({
    cookie: true
});

// for every request, check whether csrf cookie token value and request header token value match
// if they match, will go to next middleware, if not, will throw an error
app.use(csrfProtection);

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/assets'));
app.use(express.static(pathToSwaggerUi));
app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`app on http://localhost:${port}`));