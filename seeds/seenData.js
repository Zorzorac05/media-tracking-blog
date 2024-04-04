const { Movies_seen } = require('../models');

const data = [
    {
        title: "Scream",
        review: .90,
        belongs_to: 1,
    },

];

const seed = () => Movies_seen.bulkCreate(data);

module.exports = seed;