const router = require('express').Router();
const { Model } = require('sequelize');
const { Post, Users, Comments, Movies_seen, Movies_wishlist } = require('../../models');

//used to search for users
router.get('/:name', async (req, res) => {
    try {
        const userSearch = await Users.findOne({
            where: {name: req.params.name},
            include: [
                {
                    model: Movies_seen,
                    attributes: ['title', 'review'],
                }
            ],
            order: [
                [Movies_seen, 'review', 'DESC'],
            ],
            
        });

        let user = userSearch.get({ plain: true });
        res.render('users', {
            user,
        });
        //res.json(userSearch);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;