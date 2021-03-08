const sequelize = require('../database');

const { Model, DataTypes } = require('sequelize');

class Picture extends Model { }

Picture.init({
    name: DataTypes.TEXT,
    path: DataTypes.TEXT,
    alternative: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'picture'
});

module.exports = Picture;