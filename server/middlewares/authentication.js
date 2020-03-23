const {User} = require('../models')
const jwt = require('jsonwebtoken')

function authentication(req, res, next){
    try{
        let token = req.headers.token

        let decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded

        User.findOne({
            where: {
                id: req.user.id
            }
        })
            .then(data=>{
                if(data){
                    next()
                }else{
                    throw {
                        msg: 'user not found',
                        status: 404
                    }
                }
            })
            .catch(err=>{
                next(err)
            })
    }catch(err){
        next(err)
    }
}

module.exports = authentication