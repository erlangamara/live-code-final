const router = require('express').Router()
const ControllerUser = require('../controllers/userController.js')
const ControllerCountry = require('../controllers/countryController.js')
const ControllerReport = require('../controllers/reportController.js')
const authentication = require('../middlewares/authentication.js')
const authorization = require('../middlewares/authorization.js')

router.post('/login', ControllerUser.login)
router.use(authentication)
router.get('/countries', ControllerCountry.getCountry)
router.get('/reports', ControllerReport.getReport)
router.post('/reports', ControllerReport.createReport)
router.delete('/reports/:id', authorization, ControllerReport.deleteReport)

module.exports = router