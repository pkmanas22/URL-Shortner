const express = require('express');
const URLModel = require('../models/url');

const router = express.Router();

const originUrl = process.env.HOST_URL;

router.get('/', async (req, res) => {
    res.clearCookie("uid"); // Clear "uid" cookie

    if (req.cookies.s_uid) {
        res.clearCookie("s_uid"); 
    }

    res.render('trialPage', {error: null, originUrl});
})



module.exports = router;