const sequelize = require('../database');

const { Model, DataTypes } = require('sequelize');

class PossibleAnswer extends Model { }

PossibleAnswer.init({
    content: DataTypes.TEXT,
    correct: DataTypes.BOOLEAN,
}, {
    sequelize,
    tableName: 'possible_answer'
});

module.exports = PossibleAnswer;