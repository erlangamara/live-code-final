const {Report} = require('../models')
const {Country} = require('../models')

class Controller{
    static getReport(req, res, next){
        Report.findAll()
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                next(err)
            })
    }

    static createReport(req, res, next){
        let reportCases;
        let idReport;

        Country.findOne({
            where: {
                id: req.body.CountryId
            }
        })
            .then(data=>{
                reportCases = data.cases + req.body.cases

                let dataCreate = {
                    cases: req.body.cases,
                    UserId: req.user.id,
                    CountryId: req.body.CountryId
                }

               return Report.create(dataCreate)
            })
            .then(data=>{
                idReport = data.id;

                return Country.update({cases: reportCases}, {
                    where: {
                        id: req.body.CountryId
                    }
                })
            })
            .then(data=>{
                return Report.findOne({
                    where: {
                        id: idReport
                    },
                    include: [{
                        model: Country
                    }]
                })
            })
            .then(data=>{
                res.status(201).json(data)
            })
            .catch(err=>{
                next(err)
            })
    }

    static deleteReport(req, res, next){
        
    }
}

module.exports = Controller