const express = require('express')
const router = express.Router()
const students = require('../database/controllers/students')

router.post('/students/create', (req, res) => {
    students.create(
        req.body.rut,
        req.body.name,
        req.body.phone,
        req.body.mail,
        req.body.address,
        req.body.gender,
        req.body.date_of_birth
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/students/findAll', (req, res) => {
    students.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/students/destroy', (req, res) => {
    students.destroy(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/students/findOnebyId', (req, res) => {
    students.findOnebyId(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/students/update', (req, res) => {
    students.update(
        req.body.id,
        req.body.rut,
        req.body.name,
        req.body.phone,
        req.body.mail,
        req.body.address,
        req.body.gender,
        req.body.date_of_birth
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/students/findOnebyRut', (req, res) => {
    students.findOnebyRut(req.body.rut).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router