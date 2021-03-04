const sequelize = require('../database');

const { Model, DataTypes } = require('sequelize');

class Client_exercise extends Model { }

Client_exercise.init({
    score: DataTypes.INTEGER,
}, {
    sequelize,
    tableName: 'client_exercice'
});

module.exports = Client_exercise;