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

// // GET movies seen
// router.get('/movies_seen/:id', async (req, res) => {
//     try {
//         const dbMovies_SeenData = await Movies_Seen.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: movies_seen,
//                     attributes: ['belongs_to', 'title'],
//                 },
//             ],
//         });

//         const movies_seen = dbMovies_SeenData.get({ plain: true });
//         res.render('movies_seen', { movies_seen, loggedIn: req.session.loggedIn });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // GET movies wishlist
// router.get('/movies_wishlist/:id', async (req, res) => {
//     try {
//         const dbMovies_WishlistData = await Movies_Wishlist.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: movies_wishlist,
//                     attributes: ['belongs_to', 'title'],
//                 },
//             ],
//         });
//         const movies_wishlist = dbMovies_WishlistData.get({ plain: true });
//         res.render('movies_wishlist', { movies_wishlist, loggedIn: req.session.loggedIn });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

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

module.exports = router;