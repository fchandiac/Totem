'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Rooms extends Model {
    };
    Rooms.init({
        name: DataTypes.STRING,
       
    }, {
        sequelize,
        modelName: 'Rooms',
        underscored: true,
    });
    return Rooms;
};