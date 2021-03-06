const express = require('express');
const mustache = require('mustache-express');
const router = require('./routes/index');
const helpers = require('./helpers');
const errorHandler = require('./handlers/errorHandler');

// Configurações
const app = express();

app.use((req, res, next)=>{
    res.locals.h = helpers;
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use('/', router);


app.use(errorHandler.notFound);




app.engine('mst', mustache(__dirname+'/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');

module.exports = app;