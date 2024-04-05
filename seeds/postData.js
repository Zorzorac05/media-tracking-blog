const { Post } = require('../models');

const data = [
    {
        title: "First Post",
        content: "this is my first post smile",
        user_id: 1,
    },
    {
        title: "First Post",
        content: "this is my first post smile",
        user_id: 1,
    },

];

const seed = () => Post.bulkCreate(data);

module.exports = seed;