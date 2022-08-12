const Sales = require('../db').Sales
const sales = {}
const sequelize = require('sequelize')
const Lessons = require('../db').Lessons
const Students = require('../db').Estudents

async function create(lesson_id, student_id, quanty, amount, expiration) {
    const sale = await Sales.create({
        lesson_id: lesson_id,
        student_id: student_id,
        quanty: quanty,
        amount: amount,
        expiration: expiration
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return sale
}

async function findAllByLessonAndBetweenExpirationGroupByStudent(lesson_id, start_date, end_date) {
    const sale = await Sales.findAll({
        raw: true,
        attributes: [
            // [sequelize.fn('DATE', sequelize.col('expiration')), 'expiration'],
            [sequelize.col('Student.rut'), 'rut'],
            [sequelize.col('Student.name'), 'name'],
            [sequelize.col('Student.phone'), 'phone'],
            [sequelize.fn('sum', sequelize.col('amount')), 'total_amount'],
            [sequelize.fn('sum', sequelize.col('quanty')), 'total_quanty'],
            
        ],
        include: [ Students, Lessons],
        where: { expiration: { [sequelize.Op.between]: [start_date, end_date] }, lesson_id:lesson_id },
        group: ['student_id']
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return sale
}

async function findAllByLessonGroupByStudent(lesson_id) {
    const sale = await Sales.findAll({
        raw: true,
        attributes: [
            [sequelize.fn('DATE', sequelize.col('expiration')), 'expiration'],
            [sequelize.fn('sum', sequelize.col('amount')), 'total_amount'],
            [sequelize.fn('sum', sequelize.col('quanty')), 'total_quanty'],
            
        ],
        include: [{ model: Students }, { model: Lessons }],
        where: {lesson_id:lesson_id },
        group: ['student_id']
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return sale
}

async function findAllGroupByStudent() {
    const sale = await Sales.findAll({
        raw: true,
        attributes: [
            [sequelize.fn('DATE', sequelize.col('expiration')), 'expiration'],
            [sequelize.fn('sum', sequelize.col('amount')), 'total_amount'],
            [sequelize.fn('sum', sequelize.col('quanty')), 'total_quanty'],
            
        ],
        include: [{ model: Students }, { model: Lessons }],
        group: ['student_id']
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return sale
}

sales.create = create
sales.findAllByLessonGroupByStudent = findAllByLessonGroupByStudent
sales.findAllGroupByStudent = findAllGroupByStudent
sales.findAllByLessonAndBetweenExpirationGroupByStudent = findAllByLessonAndBetweenExpirationGroupByStudent

module.exports = sales