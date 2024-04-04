const { Post } = require('../models');

const data = [
    {
        title: "First Post",
        content: "this is my first post smile",
        date_created: "2024-03-10",
        created_by: 1,
    },

];

const seed = () => Post.bulkCreate(data);

module.exports = seed;