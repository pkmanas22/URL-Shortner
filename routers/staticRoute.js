const express = require('express');
const URLModel = require('../models/url');

const router = express.Router();

router.get('/', async (req, res) => {
    res.clearCookie("uid"); // Clear "uid" cookie

    if (req.cookies.s_uid) {
        res.clearCookie("s_uid"); 
    }

    res.render('trialPage', {error: null});
})



module.exports = router;