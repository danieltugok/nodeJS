exports.index = (req, res)=>{
    let obj = {
        nome: 'Kogut',
        idade: req.query.idade,
        pageTitle: 'Titulo setado'
    }

    res.render('login', obj);
}