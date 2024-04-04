const { Users } = require('../models');

const data = [
    {
        name: 'Alex',
        password: 'smile',
    },
    {
        name: 'Braedan',
        password: 'justaguy',
    },
    {
        name: 'Rylee',
        password: 'gaming',
    }
];

const seed = () => Users.bulkCreate(data);

module.exports = seed;