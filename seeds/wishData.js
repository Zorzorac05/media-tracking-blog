const { Movies_wishlist } = require('../models');

const data = [
    {
        title: "Dune 2",
        belongs_to: 1,
    },

];

const seed = () => Movies_wishlist.bulkCreate(data);

module.exports = seed;