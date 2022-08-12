const Teachers = require('../db').Teachers
const teachers = {}

async function create(rut, name, phone, mail, address) {
    const teacher = await Teachers.create({
        rut:rut, 
        name:name, 
        phone:phone, 
        mail:mail, 
        address:address
    }).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return teacher
}

async function findAll(){
    const teachers = await Teachers.findAll().then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return teachers
}

async function update(id, rut, name, phone, mail, address){
    const teacher = await Teachers.update({
        rut:rut, 
        name:name, 
        phone:phone, 
        mail:mail, 
        address:address
    }, {where: {id:id}}).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return teacher
}

async function destroy(id){
    const teacher = await Teachers.destroy({where:{id:id}}).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return teacher
}
teachers.create = create
teachers.findAll = findAll
teachers.update = update
teachers.destroy = destroy

module.exports = teachers