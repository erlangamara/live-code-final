const {User} = require('../models')
const jwt = require('jsonwebtoken')

class Controller{
    static login(req, res, next){
        User.findOne({
            where: {
                username: req.body.username
            }
        })
            .then(data=>{
                if(data.password === req.body.password){
                    let token = jwt.sign({
                        id: data.id,
                        username: data.username
                    }, process.env.SECRET)
    
                    res.status(200).json({
                        token: token,
                        id: data.id,
                        username: data.username
                    })
                }else{
                    throw {
                        msg: 'Wrong username/password',
                        status: 400
                    }
                }
            })
            .catch(err=>{
                next(err)
            })
    }
}

module.exports = Controller