const {Report} = require('../models')

function authorization(req, res, next){
    Report.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(data=>{
        if(data.UserId === req.user.id){
            next()
        }else{
            throw {
                msg: 'Not authoried',
                status: 403
            }
        }
    })
    .catch(err=>{
        next(err)
    })
}

module.exports = authorization