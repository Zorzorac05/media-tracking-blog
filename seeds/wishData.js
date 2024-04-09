const { Movies_wishlist } = require('../models');

const data = [
    {
        title: "Dune 2",
        user_id: 1,
        post_id: 2,
    },
    {
        title: "The Bay",
        user_id: 1,
        post_id: 3,
    },
    {
        title: "Rec",
        user_id: 1,
        post_id: 4,
    },
    {
        title: "The Menu",
        user_id: 1,
        post_id: 5,
    },
    {
        title: "Annihlation",
        user_id: 1,
        post_id: 6,
    },
    {
        title: "The BorderLands",
        user_id: 1,
        post_id: 7,
    },
    {
        title: "Incantation",
        user_id: 1,
        post_id: 8,
    },
    {
        title: "Venom: The Last Dance",
        user_id: 2,
        post_id: 9,
    },
    {
        title: "Sonic The Hedgehog 3",
        user_id: 2,
        post_id: 10,
    },
    {
        title: "Inside Out 2",
        user_id: 2,
        post_id: 11,
    },
    {
        title: "The Garfield Movie",
        user_id: 2,
        post_id: 12,
    },
    {
        title: "Minecraft the Movie",
        user_id: 2,
        post_id: 13,
    },
    {
        title: "Transformers One",
        user_id: 3,
        post_id: 14,
    },
    {
        title: "Mufasa the lion king",
        user_id: 3,
        post_id: 15,
    },
    {
        title: "Skinamarink",
        user_id: 1,
        post_id: 16,
    },
    {
        title: "Megamind",
        user_id: 3,
        post_id: 17,
    },
];

const seed = () => Movies_wishlist.bulkCreate(data);

module.exports = seed;