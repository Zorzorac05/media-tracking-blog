const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movies_seen extends Model {}

Movies_seen.init(
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
        review: {
            type: DataTypes.DECIMAL,
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
        modelName: 'movies_seen',
    }
);

module.exports = Movies_seen;