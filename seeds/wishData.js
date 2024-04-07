const { Movies_wishlist } = require('../models');

const data = [
    {
        title: "Dune 2",
        user_id: 1,
        post_id: 2,
    },
    // {
    //     title: "The Bay",
    //     user_id: 1,
    // },
    // {
    //     title: "Rec",
    //     user_id: 1,
    // },
    // {
    //     title: "The Menu",
    //     user_id: 1,
    // },
    // {
    //     title: "Annihlation",
    //     user_id: 1,
    // },
    // {
    //     title: "The BoarderLands",
    //     user_id: 1,
    // },
    // {
    //     title: "Incantation",
    //     user_id: 1,
    // },
    // {
    //     title: "Venom: The Last Dance",
    //     user_id: 2,
    // },
    // {
    //     title: "Sonic The Hedgehog 3",
    //     user_id: 2,
    // },
    // {
    //     title: "Inside Out 2",
    //     user_id: 2,
    // },
    // {
    //     title: "The Garfiled Movie",
    //     user_id: 2,
    // },
    // {
    //     title: "Minecraft the Movie",
    //     user_id: 2,
    // },
    // {
    //     title: "Transformers One",
    //     user_id: 3,
    // },
    // {
    //     title: "Transformers One",
    //     user_id: 3,
    // },
    // {
    //     title: "Mufasa the lion king",
    //     user_id: 3,
    // },
    // {
    //     title: "Skinamarink",
    //     user_id: 1,
    // },
    // {
    //     title: "Megamind",
    //     user_id: 1,
    // },
];

const seed = () => Movies_wishlist.bulkCreate(data);

module.exports = seed;