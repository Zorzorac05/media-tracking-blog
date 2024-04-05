const { Comments } = require('../models');

const data = [
    {
        content: "Hey look a comment how neat",
        user_id: 1,
        post_id: 1,
    },
    
];

const seed = () => Comments.bulkCreate(data);

module.exports = seed;