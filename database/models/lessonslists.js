'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class LessonsLists extends Model {
    };
    LessonsLists.init({
        lesson_id: DataTypes.INTEGER,
        student_id: DataTypes.INTEGER,
       
    }, {
        sequelize,
        modelName: 'LessonsLists',
        underscored: true,
    });
    return LessonsLists;
};