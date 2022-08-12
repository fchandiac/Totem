const Rooms = require('../db').Rooms
const rooms = {}

async function create(name) {
    const room = await Rooms.create({
        name:name
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return room
}

async function findAll() {
    const rooms = await Rooms.findAll().then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return rooms
}

async function destroy(id){
    const room = await Rooms.destroy({
        where:{id:id}
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return room
}

async function update(id, name){
    const room = await Rooms.update({
        name:name
    }, {where: {id:id}}).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return room
}

rooms.create = create
rooms.findAll = findAll
rooms.destroy = destroy
rooms.update = update

module.exports = rooms