'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Teachers extends Model {
    };
    Teachers.init({
        rut: DataTypes.STRING,
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        mail: DataTypes.STRING,
        address: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Teachers',
        underscored: true,
    });
    return Teachers;
};