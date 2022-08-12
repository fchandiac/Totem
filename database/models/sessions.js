'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Sessions extends Model {
    };
    Sessions.init({
        lesson_id: DataTypes.INTEGER,
        room_id: DataTypes.INTEGER,
        date: DataTypes.DATE,
        start: DataTypes.TIME,
        end: DataTypes.TIME
    }, {
        sequelize,
        modelName: 'Sessions',
        underscored: true,
    });
    return Sessions;
};