require('dotenv').config();
const path = require('path');
const express = require('express');
const router = require('./app/router');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
const sanitizer = require('./app/middleware/body-sanitizer');

const app = express();

app.use(cookieParser());

// use double submit cookie policy
const csrfProtection = csrf({
    cookie: true
});

// for every request, check whether csrf cookie token value and request header token value match
// if they match, will go to next middleware, if not, will throw an error
// app.use(csrfProtection);

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

// app.use(sanitizer);


// express static used by react
app.use(express.static('upload'));
app.use(express.static('assets'));
app.use((req, res, next) => {
    if (!req.url.startsWith('/api'))
        return res.sendFile(path.join(__dirname, "assets", "index.html"));
    else 
        return next();
});

// express static used by swagger
app.use("/swagger", express.static(pathToSwaggerUi));

// road in router
app.use('/api', router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`app on http://localhost:${port}`));