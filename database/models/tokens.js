'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Tokens extends Model {
    };
    Tokens.init({
        lesson_id: DataTypes.INTEGER,
        student_id: DataTypes.INTEGER,
        sale_id: DataTypes.INTEGER,
        state: DataTypes.INTEGER,
        expiration: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Tokens',
        underscored: true,
    });
    return Tokens;
};