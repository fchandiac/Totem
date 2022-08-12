const {Sequelize, DataTypes} = require('sequelize');
const db = {};
const config = require('../config_db')


db.connection = new Sequelize(
    config.database,
    config.user_name,
    config.password, 
    {
        host: config.host, 
        dialect: config.dialect,
        dialectOptions: {
            mode : ''
          },
        // timezone: '-04:00'
    })

db.Persons = require('./models/persons')(db.connection, DataTypes)
db.Estudents = require('./models/students')(db.connection, DataTypes)
db.Rooms = require('./models/rooms')(db.connection, DataTypes)
db.Lessons = require('./models/lessons')(db.connection, DataTypes)
db.Sessions = require('./models/sessions')(db.connection, DataTypes)
db.Teachers = require('./models/teachers')(db.connection, DataTypes)
db.Sales = require('./models/sales')(db.connection, DataTypes)
db.Tokens = require('./models/tokens')(db.connection, DataTypes)
db.LessonsLists = require('./models/lessonslists')(db.connection, DataTypes)
db.Attendances = require('./models/attendances')(db.connection, DataTypes)





db.Lessons.belongsTo(db.Teachers)
db.Sessions.belongsTo(db.Rooms)
db.Sessions.belongsTo(db.Lessons)
db.LessonsLists.belongsTo(db.Lessons)
db.LessonsLists.belongsTo(db.Estudents)
db.Tokens.belongsTo(db.Lessons)
db.Tokens.belongsTo(db.Estudents)
db.Attendances.belongsTo(db.Estudents)
db.Sales.belongsTo(db.Estudents)
db.Sales.belongsTo(db.Lessons)
//db.Lessons.belongsTo(db.Sessions)
//db.Teachers.belongsToMany(db.Lessons)

module.exports =db 