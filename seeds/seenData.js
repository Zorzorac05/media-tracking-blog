const { Movies_seen } = require('../models');

const data = [
    {
        title: "Scream",
        review: 90,
        user_id: 1,
        post_id: 1,
    },
    {
        title: "Puss in Boots the Last Wish",
        review: 90,
        user_id: 2,
        post_id: 18,
    },
    {
        title: "Late Night with the Devil",
        review: 70,
        user_id: 1,
        post_id: 19,
    },
    {
        title: "Creep",
        review: 75,
        user_id: 1,
        post_id: 20,
    },
    {
        title: "The Point",
        review: 80,
        user_id: 2,
        post_id: 21,
    },
    {
        title: "Maboroshi",
        review: 65,
        user_id: 2,
        post_id: 22,
    },
    {
        title: "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
        review: 80,
        user_id: 3,
        post_id: 23,
    },
    {
        title: "The Lighthouse",
        review: 80,
        user_id: 1,
        post_id: 24,
    },
    {
        title: "Everything Everywhere All at Once",
        review: 90,
        user_id: 2,
        post_id: 25,
    },
    {
        title: "Peggle 2",
        review: 100,
        user_id: 3,
        post_id: 26,
    },
    {
        title: "Nightmare on Elm Street",
        review: 90,
        user_id: 1,
        post_id: 27,
    },
    {
        title: "Train to Busan",
        review: 70,
        user_id: 2,
        post_id: 28,
    },
    {
        title: "Whiplash",
        review: 95,
        user_id: 2,
        post_id: 29,
    },
    {
        title: "The LEGO Ninjago Movie",
        review: 40,
        user_id: 1,
        post_id: 30,
    },
    {
        title: "Godzilla Minus One",
        review: 95,
        user_id: 3,
        post_id: 31,
    },
    {
        title: "Little Witch Academia",
        review: 75,
        user_id: 2,
        post_id: 32,
    },
    {
        title: "Monster House",
        review: 55,
        user_id: 1,
        post_id: 33,
    },
    {
        title: "The Ballad of Songbirds and Snakes",
        review: 80,
        user_id: 3,
        post_id: 34,
    },
    {
        title: "Barbie",
        review: 100,
        user_id: 1,
        post_id: 35,
    },
    {
        title: "Hereditary",
        review: 90,
        user_id: 1,
        post_id: 36,
    },
    {
        title: "Barbarian",
        review: 95,
        user_id: 1,
        post_id: 37,
    },
    {
        title: "Ghost Stories",
        review: 70,
        user_id: 2,
        post_id: 38,
    },
    {
        title: "John Dies at the End",
        review: 10,
        user_id: 3,
        post_id: 39,
    },
    {
        title: "Alita Battle Angel",
        review: 75,
        user_id: 3,
        post_id: 40,
    },
    {
        title: "Bullet Train",
        review: 90,
        user_id: 2,
        post_id: 41,
    },
    {
        title: "Five Nights at Freddies Movie",
        review: 70,
        user_id: 3,
        post_id: 42,
    },


    // Break comment in case of emergency
    // {
    //     title: "",
    //     review: ,
    //     user_id: ,
    // },
];

const seed = () => Movies_seen.bulkCreate(data);

module.exports = seed;