const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movies_wishlist extends Model {}

Movies_wishlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        belongs_to: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            },
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