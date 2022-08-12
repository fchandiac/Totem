const express = require('express')
const router = express.Router()


const attendances = require('../database/controllers/attendances')

router.post('/attendances/create', (req, res) => {
    attendances.create(
        req.body.lesson_id, 
        req.body.student_id,
        req.body.session_id,
        req.body.token_id).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})

router.post('/attendances/findAllbySession', (req, res) => {
    attendances.findAllbySession(req.body.session_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


router.post('/attendances/findOnebySessionAndStudent', (req, res) => {
    attendances.findOnebySessionAndStudent(req.body.session_id, req.body.student_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router