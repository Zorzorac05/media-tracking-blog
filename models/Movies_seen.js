const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movies_seen extends Model {}

Movies_seen.init(
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
        review: {
            type: DataType.DECIMAL,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'movies_seen',
    }
);

module.exports = Movies_seen;