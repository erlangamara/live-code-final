const {Country} = require('../models')

class Controller{
    static getCountry(req, res, next){
        Country.findAll()
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                next(err)
            })
    }
}

module.exports = Controller