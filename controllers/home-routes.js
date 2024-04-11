const router = require('express').Router();
const { Post, Users, Comments, Movies_seen, Movies_wishlist } = require('../models');

// GET for homepage shows some post without needing to log in
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: Movies_seen,
                    attributes: ['title', 'review'],
                }
            ]
        });

        const homePost = dbPostData.map((post) =>
            post.get({ plain: true })
        );
        //console.log(homePost);
        res.render('homepage', {
            homePost,
            //loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/users', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    res.render('users');
});

router.get('/myMovies', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    res.render('wishlist');
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    res.render('login');
});

//route to let users make post
router.post('/post', async (req, res) => {
    console.log(req.body.title);
    try {
        const newPost = await Post.create(req.body);
        // return res.json(newPost);
        return;
    }catch (err) {
        res.status(500).json(err);
    }
});

//add to wishlist table
router.post('/post/wish', async (req, res) => {
    let position = await Post.findAll({
        order: [
            ['id', 'DESC'],
        ],
    });
    let newMovie = {
        title: req.body.title,
        user_id: req.body.user_id,
        post_id: position[0].id + 1,
    };
    console.log(newMovie);
     const movie = await Movies_wishlist.create(newMovie);
    //return res.json(movie);
  });

  //add to seen movies table
  router.post('/post/seen', async (req, res) => {
    let position = await Post.findAll({
        order: [
            ['id', 'DESC'],
        ],
    });
    let newMovie = {
        title: req.body.title,
        review: req.body.review,
        user_id: req.body.user_id,
        post_id: position[0].id + 1,
    };
    console.log(newMovie);
     const movie = await Movies_seen.create(newMovie);
    //return res.json(movie);
  });

module.exports = router;