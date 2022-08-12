const Tokens = require('../db').Tokens
const tokens = {}
const Lessons = require('../db').Lessons
const Students = require('../db').Estudents
const sequelize = require('sequelize')
const moment = require('moment')

/* Tokens State 
    1: available
    2: expired
    3: used */

async function create(lesson_id, student_id, sale_id, expiration) {
    const token = await Tokens.create({
        lesson_id: lesson_id,
        student_id: student_id,
        sale_id: sale_id,
        expiration: expiration
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return token
}



async function findAll() {
    const tokens = await Tokens.findAll({
        include: [{ model: Students }, { model: Lessons }],
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tokens
}

async function updateStateByExpiration() {
    var today = moment().format('YYYY-MM-DD')
    var todayStr = today.toString() + 'T23:59:00.000Z'
    const tokens = await Tokens.update({
        state:2,
    }, {where: 
        {state:1, expiration:{[sequelize.Op.lte]: todayStr}}
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return tokens
}

async function destroy(id) {
    const token = await Tokens.destroy({
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return token

}

async function findAllByStudentGroupByLesson(student_id) {
    const tokens = await Tokens.findAll({
        where: { student_id: student_id },
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tokens
}



async function findAllAvailablesByStudentAndLesson(student_id, lesson_id) {
    const tokens = await Tokens.findAll({
        where: { student_id: student_id, lesson_id: lesson_id, state: 1 },
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tokens
}

async function updateStateToUsed(id) {
    const tokens = await Tokens.update({
        state: 3,
    }, {
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tokens
}


async function findAllAvailablesByStudent(student_id) {
    const tokens = await Tokens.findAll({
        where: { student_id: student_id, state: 1 },
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tokens
}



async function findAllByStudent(student_id) {
    const tokens = await Tokens.findAll({
        include: [{ model: Students }, { model: Lessons }],
        where: { student_id: student_id },
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tokens
}

async function findAllUsedByStudent(student_id) {
    const tokens = await Tokens.findAll({
        where: { student_id: student_id, state: 3 },
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tokens
}

async function findAllExpiredByStudent(student_id) {
    const tokens = await Tokens.findAll({
        where: { student_id: student_id, state: 2 },
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tokens
}


tokens.create = create
tokens.findAllByStudent = findAllByStudent
tokens.findAll = findAll
tokens.updateStateByExpiration = updateStateByExpiration
tokens.destroy = destroy
tokens.findAllAvailablesByStudent = findAllAvailablesByStudent
tokens.findAllAvailablesByStudentAndLesson = findAllAvailablesByStudentAndLesson
tokens.updateStateToUsed = updateStateToUsed
tokens.findAllUsedByStudent = findAllUsedByStudent
tokens.findAllExpiredByStudent = findAllExpiredByStudent


module.exports = tokens