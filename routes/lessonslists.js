const express = require('express')
const router = express.Router()
const lessonsLists = require('../database/controllers/lessonslists')

router.post('/lessonslists/create', (req,res) => {
    lessonsLists.create(req.body.lesson_id, req.body.student_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/lessonsLists/findAllByStudent', (req,res) => {
    lessonsLists.findAllByStudent(req.body.student_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/lessonLists/findAllByLesson', (req, res) => {
    lessonsLists.findAllByLesson(req.body.lesson_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/lessonLists/destroy', (req, res) => {
    lessonsLists.destroy(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/lessonLists/countStudentsByLesson', (req, res) => {
    lessonsLists.countStudentsByLesson().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router