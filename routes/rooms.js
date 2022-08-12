const express = require('express')
const router = express.Router()
const rooms = require('../database/controllers/rooms')

router.post('/rooms/create', (req, res) => {
    rooms.create(req.body.name).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/rooms/findAll', (req, res) => {
    rooms.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/rooms/destroy', (req, res) => {
    rooms.destroy(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/rooms/update', (req, res) => {
    rooms.update(req.body.id, req.body.name).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})




module.exports = router