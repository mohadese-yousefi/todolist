const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('views', __dirname + '../views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const indexRoutes = require('./routes/index');
const storeRoutes = require('./routes/store');
const doneRoutes = require('./routes/done');

app.use(bodyParser.urlencoded({extended: false}));

app.use(indexRoutes);
app.use(storeRoutes);
app.use(doneRoutes);

//app.use((req, res, next) => {
//    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
//});

app.listen(3000);
