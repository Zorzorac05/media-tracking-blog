const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movies_wishlist extends Model {}

Movies_wishlist.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'movies_wishlist',
    }
);

module.exports = Movies_wishlist;