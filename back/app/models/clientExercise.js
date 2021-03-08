const sequelize = require('../database');

const { Model, DataTypes } = require('sequelize');

class Client_exercise extends Model { }

Client_exercise.init({
    score: DataTypes.INTEGER,
}, {
    sequelize,
    tableName: 'client_exercise'
});

module.exports = Client_exercise;