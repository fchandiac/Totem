const express = require('express')
const router = express.Router()
const teachers = require('../database/controllers/teachers')

router.post('/teachers/create', (req, res) => {
    teachers.create(
        req.body.rut,
        req.body.name,
        req.body.phone,
        req.body.mail,
        req.body.address
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/teachers/findAll', (req, res) => {
    teachers.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/teachers/destroy', (req,res) => {
    teachers.destroy(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/teachers/update', (req, res) => {
    teachers.update(
        req.body.id,
        req.body.rut,
        req.body.name,
        req.body.phone,
        req.body.mail,
        req.body.address
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router