const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

// DB conection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', ( error )=>{
    console.error("ERRO: " + error.message); 
});



// Loading Models
require('./models/Posts');





const app = require('./app');


app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), ()=>{
    console.log('Servidor rodando na porta: ' + server.address().port );
});