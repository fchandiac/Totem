const express = require('express')
const router = express.Router()
const persons = require('../database/controllers/persons')


router.post('/persons/create', (req, res) => {
    persons.create(
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

router.post('/persons/destroy', (req, res) => {
    persons.destroy(req.body.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router