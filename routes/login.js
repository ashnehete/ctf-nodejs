const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/login')
})

router.get('/login', (req, res) => {
    if (req.cookies && req.cookies["isLoggedIn"] === 'true') {
        res.redirect('/hidden')
    } else {
        res.cookie("isLoggedIn", false)
        res.render('login')
    }
})

router.post('/login', (req, res) => {
    res.redirect('/login')
})

module.exports = router;