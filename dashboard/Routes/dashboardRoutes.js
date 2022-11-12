//importing modules
const express = require('express')
const dashboardController = require('../Controller/dashboardController')
const { createDashboard } = dashboardController

const router = express.Router()

//new dashboard endpoint

router.post('/newdashboard', createDashboard)


module.exports = router