const express = require('express');

const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes');

db('mongodb+srv://jose-carrasco_21:O3fupuoVRTkF3PTF@cluster0.spnetol.mongodb.net/?retryWrites=true&w=majority');

const app = express();

const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.listen(5000);

console.log('La aplicacion esta escuchando en http://localhost:5000');
