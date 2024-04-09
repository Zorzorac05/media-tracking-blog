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
    {
        title: "I heard about this movie called The Bay",
        content: "Im looking to try new horror movies and a friend recomended this one anyone looking to get spooky?",
        user_id: 1,
    },
    {
        title: "Rec",
        content: "The movie is spanish but if you arnt scared of reading it will be a good time! :)",
        user_id: 1,
    },
    {
        title: "Ummmm whos hungry?",
        content: "A interting new movie that has to do with food make sure you bring extra popcorn!",
        user_id: 1,
    },
    {
        title: "Spooky bear man",
        content: "Spooky bears man does spooking alright man",
        user_id: 1,
    },
    {
        title: "No not the video game",
        content: "found footage regious horror movie",
        user_id: 1,
    },
    {
        title: "Its on Netflix!",
        content: "love a good forign spooky",
        user_id: 1,
    },
    {
        title: "Venom is back",
        content: "big venom fan in serach of other venom enjoyers",
        user_id: 2,
    },
    {
        title: "Sonic time Baby",
        content: "Biggest Sonic fan NA ready to report to the movie",
        user_id: 2,
    },
    {
        title: "Another one of these i gotta see it",
        content: "lets learn more about our feelings",
        user_id: 2,
    },
    {
        title: "Uhhhh Meow",
        content: "my favorite lasanga loving cat on the big screen",
        user_id: 2,
    },
    {
        title: "Its all blocks wild",
        content: "Square emoji",
        user_id: 2,
    },
    {
        title: "Autobots roll out",
        content: "pretty sure there is more than 1 of these but ill still go see it",
        user_id: 3,
    },
    {
        title: "everthing the light doesnt touch is in the theater",
        content: "surely another lion king movie couldnt be a bad thing",
        user_id: 3,
    },
    {
        title: "im curious",
        content: "seems odd and intersting why not see it?",
        user_id: 1,
    },
    {
        title: "need to understand the lore",
        content: "so much knowledge in one big blue mind",
        user_id: 3,
    },
    {
        title: "Puss in Boots the Last Wish",
        content: "great movie",
        user_id: 2,
    },
    {
        title: "Late Night with the Devil",
        content: "good movie big props for not using jump sacres",
        user_id: 1,
    },
    {
        title: "Creep",
        content: "very unsetting great if you want to feel uncomfortable",
        user_id: 1,
    },
    {
        title: "The Point",
        content: "movie that I like smile",
        user_id: 2,
    },
    {
        title: "Maboroshi",
        content: "Wacky title",
        user_id: 2,
    },
    {
        title: "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
        content: "Long title",
        user_id: 3,
    },
    {
        title: "The Lighthouse",
        content: "old movie in black and white :)",
        user_id: 1,
    },
    {
        title: "Everything Everywhere All at Once",
        content: "best movie",
        user_id: 2,
    },
    {
        title: "Peggle 2",
        content: "surely this is a movie",
        user_id: 3,
    },
    {
        title: "Nightmare on Elm Street ",
        content: "classic horror",
        user_id: 1,
    },
    {
        title: "Train to Busan",
        content: "Choo Choo",
        user_id: 2,
    },
    {
        title: "Whiplash",
        content: "anime for band kids",
        user_id: 2,
    },
    {
        title: "The Lego Ninjago Movie",
        content: "I love naruto",
        user_id: 1,
    },
    {
        title: "Godzilla minus one",
        content: "big dino",
        user_id: 2,
    },
    {
        title: "Little Witch Academia",
        content: "Little Witch Academia was better",
        user_id: 2,
    },
    {
        title: "Moster House",
        content: "classic of spooking a young me",
        user_id: 1,
    },
    {
        title: "The Ballad of Songbirds and Snakes",
        content: "sing song bird",
        user_id: 3,
    },
    {
        title: "Barbie",
        content: "a true movie for women around the globe",
        user_id: 1,
    },
    {
        title: "Hereditary",
        content: "will pretend to have seen it great movie",
        user_id: 1,
    },
    {
        title: "Barbarian",
        content: "angry mans movie",
        user_id: 1,
    },
    {
        title: "Ghost Stories",
        content: "get your campfire ready",
        user_id: 2,
    },
    {
        title: "John Dies at the end",
        content: "spoiler alert",
        user_id: 3,
    },
    {
        title: "Alitta Battle Angel",
        content: "a movie for gamers only",
        user_id: 3,
    },
    {
        title: "Bullet Train",
        content: "not to be confused with catiplut train",
        user_id: 2,
    },
    {
        title: "Five nights at freddie's",
        content: "Five nights at Freddy's Is this where you want to be? I just don't get it Why do you want to stay Five nights at Freddy's? Is this where you want to be? I just don't get it Why do you want to stay? Five nights at Freddy's, oh",
        user_id: 3,
    },
];

const seed = () => Post.bulkCreate(data);

module.exports = seed;