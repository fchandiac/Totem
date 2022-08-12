'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Sales extends Model {
    };
    Sales.init({
        lesson_id: DataTypes.INTEGER,
        student_id: DataTypes.INTEGER,
        quanty: DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        expiration: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Sales',
        underscored: true,
    });
    return Sales;
};