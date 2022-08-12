const LessonsLists = require('../db').LessonsLists
const lessonsLists = {}
const Lessons = require('../db').Lessons
const Students = require('../db').Estudents
const sequelize = require('sequelize')


async function create(lesson_id, student_id) {
    const lessonlist = await LessonsLists.create({
        lesson_id: lesson_id, student_id: student_id
    }).then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return lessonlist
}

async function findAllByStudent(student_id) {
    const lessonlist = await LessonsLists.findAll({
        include: Lessons,
        where: { student_id: student_id }
    }).then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return lessonlist
}

async function findAllByLesson(lesson_id) {
    const lessonlist = await LessonsLists.findAll({
        include: Students,
        where: { lesson_id: lesson_id }
    }).then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return lessonlist
}

async function destroy(id) {
    const lessonlist = await LessonsLists.destroy({
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
return lessonlist
}


async function countStudentsByLesson() {
    const lessonlist = await LessonsLists.findAll({
        attributes:[
            'lesson_id',
            [sequelize.fn('COUNT', sequelize.col('lesson_id')), 'students_count']
        ],
        include: Lessons,
       // where: { lesson_id: lesson_id },
        group: ['lesson_id'] 
    }).then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return lessonlist
}

lessonsLists.create = create
lessonsLists.findAllByStudent = findAllByStudent
lessonsLists.findAllByLesson = findAllByLesson
lessonsLists.destroy = destroy
lessonsLists.countStudentsByLesson = countStudentsByLesson

module.exports = lessonsLists