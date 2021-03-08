const sequelize = require('../database');

const { Model, DataTypes } = require('sequelize');

class Doc extends Model { }

Doc.init({
    title: DataTypes.TEXT,
    brief: DataTypes.TEXT,
    slug: DataTypes.TEXT,
    content: DataTypes.TEXT,
    published: DataTypes.BOOLEAN,
}, {
    sequelize,
    tableName: 'doc'
});

module.exports = Doc;