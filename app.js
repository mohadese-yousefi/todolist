const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const indexRoutes = require('./routes/todolistroutes');

app.use(bodyParser.urlencoded({extended: false}));

app.use(indexRoutes);

app.listen(5000);
