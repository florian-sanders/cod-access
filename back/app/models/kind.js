const sequelize = require('../database');

const { Model, DataTypes } = require('sequelize');

class Kind extends Model { }

Kind.init({
    name: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'kind'
});

module.exports = Kind;