// Placeholder for user-routes, to be updated when the need arises
const express = require('express');
const router = require('express').Router();
const { Users } = require('../../models');

// User Signup
router.post('/signup', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// User Login

router.post('/login', async (req, res) => {
    console.log(req.body.username)
    try {

        const dbUserData = await Users.findOne({ where: { name: req.body.name } });

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.logged_in = true;
            res.json({ user: dbUserData, message: 'You did it Charlie, you won!' })
        })
        if (!dbUserData) {
            return res.status(400).json({ message: 'Incorrect Username or Password. Lets try that again' });
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            return res.status(400).json({ message: 'Incorrect Username or Password. Lets try that again' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// User Logout
router.get('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
