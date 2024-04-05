const { Post } = require('../models');

const data = [
    {
        title: "Saw Scream",
        content: "Scream is really neat and cool a classic",
        user_id: 1,
    },

];

const seed = () => Post.bulkCreate(data);

module.exports = seed;