const sequelize = require('../database');

const { Model, DataTypes } = require('sequelize');

class Theme extends Model { }

Theme.init({
    name: DataTypes.TEXT,
    color: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'theme'
});

module.exports = Theme;