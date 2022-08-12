const Lessons = require('../db').Lessons
const Teachers = require('../db').Teachers
const lessons = {}

async function create(teacher_id, name, quota){
    const lesson = await Lessons.create({
        teacher_id:teacher_id,
        name:name,
        quota:quota
    }).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return lesson
}

async function findAll(){
    const lessons = await Lessons.findAll({
        include: Teachers
    })
    .then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return lessons
}

async function destroy(id){
    const lesson = await Lessons.destroy({
        where: {id:id}
    }).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return lesson
}


async function update(id, teacher_id, name, quota){
    const lesson = await Lessons.update({
        name:name,
        teacher_id: teacher_id,
        quota:quota
    }, {where: {id:id}}).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return lesson
}

lessons.create = create
lessons.findAll = findAll
lessons.destroy = destroy
lessons.update = update

module.exports = lessons