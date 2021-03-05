require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const bodyParser = require('body-parser');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8080',
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));

// app.use(express.static(__dirname + '/assets'));
app.use(express.static(pathToSwaggerUi));
app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`app on http://localhost:${port}`));