'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Attendances extends Model {
    };
    Attendances.init({
        lesson_id: DataTypes.INTEGER,
        student_id: DataTypes.INTEGER,
        session_id:DataTypes.INTEGER,
        token_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Attendances',
        underscored: true,
    });
    return Attendances;
};