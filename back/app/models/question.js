const sequelize = require('../database');

const { Model, DataTypes } = require('sequelize');

class Question extends Model { }

Question.init({
    brief: DataTypes.TEXT,
    code: DataTypes.TEXT,
    explanation: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'question'
});

module.exports = Question;