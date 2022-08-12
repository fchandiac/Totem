const express = require('express')
const router = express.Router()
const tokens = require('../database/controllers/tokens')
const moment = require('moment')

router.post('/tokens/create', (req, res) => {
    tokens.create(req.body.lesson_id, req.body.student_id, req.body.sale_id, req.body.expiration)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/tokens/findAllByStudent', (req, res) => {
    tokens.findAllByStudent(req.body.student_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/tokens/findAll', (req, res) => {
    tokens.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/tokens/updateStateByExpiration', (req, res) => {
    //var today = moment().format('YYYY-MM-DD')
    tokens.updateStateByExpiration().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/tokens/destroy', (req,res) => {
    tokens.destroy(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/tokens/findAllAvailablesByStudent', (req,res) => {
    tokens.findAllAvailablesByStudent(req.body.student_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


router.post('/tokens/findAllAvailablesByStudentAndLesson', (req,res) => {
    tokens.findAllAvailablesByStudentAndLesson(req.body.student_id, req.body.lesson_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


router.post('/tokens/updateStateToUsed', (req,res) => {
    tokens.updateStateToUsed(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/tokens/findAllUsedByStudent', (req,res) => {
    tokens.findAllUsedByStudent(req.body.student_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/tokens/findAllExpiredByStudent', (req,res) => {
    tokens.findAllExpiredByStudent(req.body.student_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router