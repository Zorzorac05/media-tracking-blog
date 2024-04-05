const { Movies_wishlist } = require('../models');

const data = [
    {
        title: "Dune 2",
        user_id: 1,
    },

];

const seed = () => Movies_wishlist.bulkCreate(data);

module.exports = seed;