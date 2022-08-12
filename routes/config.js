const express = require('express')
const router = express.Router()
const config = require('../config')

router.get('/serverUrl', (req,res) => {
    let serverUrl = 'http://'+config.host+':'+config.data_port+'/'
    res.send(serverUrl)
})


module.exports = router