function errorHandler (err, req, res, next) {
    if (err.msg === 'Wrong username/password') {
        res.status(err.status).json({message: err.msg})
    }else{
        res.status(500)
    }
    res.render('error', { error: err })
}

module.exports = errorHandler