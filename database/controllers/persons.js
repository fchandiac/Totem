const Persons = require('../db').Persons
const persons = {}

async function create (rut,name,phone,mail,address,gender,date_of_birth){
    const person = await Persons.create({
        rut:rut,
        name:name,
        phone:phone,
        mail:mail,
        address:address,
        gender:gender,
        date_of_birth:date_of_birth
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})

    return person
}

async function findAll(){
    const persons = await Persons.findAll()
    .then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return persons
}

async function destroy(id) {
    const person = await Persons.destroy({
        where: {id:id}
    }).then(data => { return {'code': 1, 'data':data}})
    .catch(err => {return {'code': 0, 'data':err}})
    return person
}

persons.create = create
persons.findAll = findAll
persons.destroy = destroy
module.exports = persons