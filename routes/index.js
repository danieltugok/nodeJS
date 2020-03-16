const express = require('express');

// Rotas
const router = express.Router();

router.get('/', (req, res)=>{

    let obj = {
        nome: 'Kogut',
        idade: req.query.idade,
        pageTitle: 'Titulo setado'
    }

    res.render('home', obj);
})


router.get('/sobre', (req, res)=>{
    res.send('Pagina SOBRE');
})

module.exports = router;