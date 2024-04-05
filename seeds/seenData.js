const { Movies_seen } = require('../models');

const data = [
    {
        title: "Scream",
        review: .90,
        user_id: 1,
    },

];

const seed = () => Movies_seen.bulkCreate(data);

module.exports = seed;