const Sessions = require('../db').Sessions
const Rooms = require('../db').Rooms
const Lessons = require('../db').Lessons
const sessions = {}
const sequelize = require('sequelize')

async function create(room_id, lesson_id, date, start, end) {
    const session = await Sessions.create({
        room_id: room_id,
        lesson_id: lesson_id,
        date: date,
        start: start,
        end: end
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return session
}

async function findAllByLessonAndDate(lesson_id, date) {
    const session = await Sessions.findAll({
        include:[{model: Rooms}, {model: Lessons}],
        where: { lesson_id: lesson_id,
            date: { [sequelize.Op.startsWith]: date }}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return session
}

async function findAllByRoomAndDate(room_id, date){
    const sessions = await Sessions.findAll({
        include: [{model: Rooms}, {model: Lessons}],
        where: {room_id: room_id,
            date: { [sequelize.Op.startsWith]: date }}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return sessions
}

async function destroy(id){
    const session = await Sessions.destroy({
        where: {id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return session
}

async function findAllByLessonDateAndStart(lesson_id, date) {
    const session = await Sessions.findAll({
        include: Rooms,
        where: { lesson_id: lesson_id,
            date: { [sequelize.Op.startsWith]: date }}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return session
}

sessions.create = create
sessions.findAllByLessonAndDate = findAllByLessonAndDate
sessions.findAllByRoomAndDate = findAllByRoomAndDate
sessions.destroy = destroy
module.exports = sessions