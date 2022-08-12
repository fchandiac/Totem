const Students = require('../db').Estudents
const students = {} 

async function create(rut,name,phone,mail,address,gender,date_of_birth){
    const student  = await Students.create({
        rut:rut,
        name:name,
        phone:phone,
        mail:mail,
        address:address,
        gender:gender,
        date_of_birth:date_of_birth
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})

    return student
}

async function findAll(){
    const students = await Students.findAll({
    })
    .then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return students
}

async function destroy(id){
    const student = await Students.destroy({
        where:{id:id}
    }).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return student
}

async function findOnebyId(id){
    const student = await Students.findOne({
        where: {id:id}
    }).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return student
}

async function update(id, rut,name,phone,mail,address,gender,date_of_birth){
    const student = await Students.update({
        rut:rut,
        name:name,
        phone:phone,
        mail:mail,
        address:address,
        gender:gender,
        date_of_birth:date_of_birth
    }, {where: {id:id}}).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return student
}

async function findOnebyRut(rut){
    const student = await Students.findOne({
        where: {rut:rut}
    }).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return student
}

students.create = create
students.findAll = findAll
students.destroy = destroy
students.findOnebyId = findOnebyId
students.update = update
students.findOnebyRut = findOnebyRut

module.exports = students