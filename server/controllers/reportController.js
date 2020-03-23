const {Report} = require('../models')
const {Country} = require('../models')

class Controller{
    static getReport(req, res, next){
        Report.findAll({
            include: [{
                model: Country
            }]
        })
            .then(data=>{
                let dataGet = []
                data.forEach(data => {
                   dataGet.push({
                        cases: data.cases,
                        Country: data.Country
                    })
                });

                res.status(200).json(dataGet)
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
        let casesReport;
        let idCountry;
        
        Report.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(data=>{
            casesReport = data.cases
            
            return Country.findOne({
                where: {
                    id: data.CountryId
                }
            })
        })
        .then(data=>{
                let updateCases = {
                    cases: data.cases - casesReport
                }

                idCountry = data.id;

                return Country.update(updateCases,{
                    where: {
                        id: data.id
                    }
                })
            })
            .then(data=>{
                return Report.destroy({
                    where: {
                        id: req.params.id
                    }
                })
            })
            .then(data=>{
                return Country.findOne({
                    where: {
                        id: idCountry
                    }
                })
            })
            .then(data=>{
                res.status(200).json({
                    country: data,
                    report: "Successfully delete"
                })
            })
            .catch(err=>{
                next(err)
            })
    }
}

module.exports = Controller