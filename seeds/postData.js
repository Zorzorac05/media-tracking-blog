const { Post } = require('../models');

const data = [
    {
        title: "Saw Scream",
        content: "Scream is really neat and cool a classic",
        user_id: 1,
    },
    {
        title: "really want to see the new dune",
        content: "looking for people to see the new dune movie with",
        user_id: 1,
    },
];

const seed = () => Post.bulkCreate(data);

module.exports = seed;