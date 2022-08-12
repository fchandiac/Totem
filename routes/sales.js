const express = require('express')
const router = express.Router()
const sales = require('../database/controllers/sales')


router.post('/sales/create', (req, res) => {
    sales.create(req.body.lesson_id, req.body.student_id,req.body.quanty, req.body.amount, req.body.expiration)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/sales/findAllByLessonGroupByStudent', (req, res) => {
    sales.findAllByLessonGroupByStudent(
        req.body.lesson_id
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sales/findAllByLessonAndBetweenExpirationGroupByStudent', (req, res) => {
    sales.findAllByLessonAndBetweenExpirationGroupByStudent(
        req.body.lesson_id,
        req.body.start_date,
        req.body.end_date
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.get('/sales/findAllGroupByStudent', (req, res) => {
    sales.findAllGroupByStudent().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router