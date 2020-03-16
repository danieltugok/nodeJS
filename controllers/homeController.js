exports.userMiddleware = (req, res, next) => {

    let info = {name:'Daniel Kogut', id:123}

    req.userInfo = info;
    next();
}



exports.index = (req, res)=>{
    let obj = {
        userInfo: req.userInfo,
        idade: req.query.idade,
        pageTitle: 'Titulo HOME'
    }

    res.render('home', obj);
}