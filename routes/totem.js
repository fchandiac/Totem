const express = require('express')
const router = express.Router()
const path = require('path')


//express.static(path.join(__dirname, 'public')
router.get('/totem', (req, res) => {
    res.sendFile(path.join(__dirname, '../totem/index.html'))
})

module.exports = router