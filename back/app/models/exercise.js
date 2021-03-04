const sequelize = require('../database');

const { Model, DataTypes } = require('sequelize');

class Exercise extends Model { }

Exercise.init({
    title: DataTypes.TEXT,
    brief: DataTypes.TEXT,
    published: DataTypes.BOOLEAN,
}, {
    sequelize,
    tableName: 'exercise'
});

module.exports = Exercise;