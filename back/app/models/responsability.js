const sequelize = require('../database');

const { Model, DataTypes } = require('sequelize');

class Responsability extends Model { }

Responsability.init({
    entitled: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'responsability'
});

module.exports = Responsability;