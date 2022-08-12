'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Lessons extends Model {
    };
    Lessons.init({
        teacher_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        quota: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Lessons',
        underscored: true,
    });
    return Lessons;
};