const express = require('express')
const router = express.Router()
const lessons = require('../database/controllers/lessons')

router.post('/lessons/create', (req, res) => {
    lessons.create(
        req.body.teacher_id,
        req.body.name,
        req.body.quota
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/lessons/findAll', (req,res) => {
    lessons.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/lessons/destroy', (req, res) => {
    lessons.destroy(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/lessons/update', (req, res) => {
    lessons.update(
        req.body.id,
        req.body.teacher_id,
        req.body.name,
        req.body.quota
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router