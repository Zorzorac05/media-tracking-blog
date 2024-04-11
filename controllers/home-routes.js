const router = require('express').Router();
const { Post } = require('../models');

// GET for homepage shows some post without needing to log in
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll();

        const homePost = dbPostData.map((post) =>
            post.get({ plain: true })
        );
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
router.post('/post', (req, res) => {
    
});

module.exports = router;