const path = require('node:path');
const express = require("express");

const router = express.Router();

router.get('/flag', (req, res) => {
    let options = {
        root: path.join(__dirname, '../public'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }
    res.sendFile('flag.png', options)
})

module.exports = router;