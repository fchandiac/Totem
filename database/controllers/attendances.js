const Attendances = require('../db').Attendances
const Students = require('../db').Estudents
const attendances = {}

async function create(lesson_id, student_id, session_id, token_id) {
    const attendance = await Attendances.create({
        lesson_id: lesson_id, student_id:student_id, session_id:session_id, token_id:token_id
    }).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return attendance
}

async function findAllbySession(session_id) {
    const attendance = Attendances.findAll({
        include: Students,
        where: {session_id:session_id}
    }).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return attendance
}

async function findOnebySessionAndStudent(session_id, student_id) {
    const attendance = Attendances.findOne({
        where: {session_id:session_id, student_id:student_id}
    }).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})

    return attendance
}

attendances.create = create
attendances.findAllbySession = findAllbySession
attendances.findOnebySessionAndStudent = findOnebySessionAndStudent


module.exports = attendances