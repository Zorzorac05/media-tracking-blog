const { Movies_seen } = require('../models');

const data = [
    {
        title: "Scream",
        review: .90,
        user_id: 1,
    },
    {
        title: "Puss in Boots the Last Wish",
        review: .90,
        user_id: 2,
    },
    {
        title: "Late Night with the Devil",
        review: .70,
        user_id: 1,
    },
    {
        title: "Creep",
        review: .75,
        user_id: 1,
    },
    {
        title: "The Point",
        review: .80,
        user_id: 2,
    },
    {
        title: "Maboroshi",
        review: .65,
        user_id: 2,
    },
    {
        title: "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
        review: .80,
        user_id: 3,
    },
    {
        title: "The Lighthouse",
        review: .80,
        user_id: 1,
    },
    {
        title: "Everything Everywhere All at Once",
        review: .90,
        user_id: 2,
    },
    {
        title: "Peggle 2",
        review: 1,
        user_id: 3,
    },
    {
        title: "Nightmare on Elm Street",
        review: .90,
        user_id: 1,
    },
    {
        title: "Train to Busan",
        review: .70,
        user_id: 2,
    },
    {
        title: "Whiplash",
        review: .95,
        user_id: 2,
    },
    {
        title: "The LEGO Ninjago Movie",
        review: .40,
        user_id: 1,
    },
    {
        title: "Godzilla Minus One",
        review: .95,
        user_id: 3,
    },
    {
        title: "Little Witch Academia",
        review: .75,
        user_id: 2,
    },
    {
        title: "Monster House",
        review: .55,
        user_id: 1,
    },
    {
        title: "The Ballad of Songbirds and Snakes",
        review: .80,
        user_id: 3,
    },
    {
        title: "Barbie",
        review: 1,
        user_id: 1,
    },
    {
        title: "Hereditary",
        review: .90,
        user_id: 1,
    },
    {
        title: "Barbarian",
        review: .95,
        user_id: 1,
    },
    {
        title: "Ghost Stories",
        review: .70,
        user_id: 2,
    },
    {
        title: "John Dies at the End",
        review: .10,
        user_id: 3,
    },
    {
        title: "Alita Battle Angel",
        review: .75,
        user_id: 3,
    },
    {
        title: "Bullet Train",
        review: .90,
        user_id: 2,
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