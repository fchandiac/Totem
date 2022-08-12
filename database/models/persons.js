'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Persons extends Model {
    };
    Persons.init({
        rut:  DataTypes.STRING,
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        mail: DataTypes.STRING,
        address: DataTypes.STRING,
        gender: DataTypes.STRING ,
        date_of_birth: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Persons',
        underscored: true,
    });
    return Persons;
};