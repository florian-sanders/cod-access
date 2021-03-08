const sequelize = require('../database');

const { Model, DataTypes } = require('sequelize');

class Responsibility extends Model { }

Responsibility.init({
    entitled: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'responsibility'
});

module.exports = Responsibility;