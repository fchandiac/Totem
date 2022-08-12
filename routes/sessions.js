const express = require('express')
const router = express.Router()
const sessions = require('../database/controllers/sessions')

router.post('/sessions/create', (req, res) => {
    sessions.create(
        req.body.room_id,
        req.body.lesson_id,
        req.body.date,
        req.body.start,
        req.body.end
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sessions/findAllByLessonAndDate', (req, res) => {
    sessions.findAllByLessonAndDate(
        req.body.lesson_id,
        req.body.date
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sessions/findAllByRoomAndDate', (req,res) => {
    sessions.findAllByRoomAndDate(req.body.room_id, req.body.date).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sessions/destroy', (req,res) => {
    sessions.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



module.exports = router