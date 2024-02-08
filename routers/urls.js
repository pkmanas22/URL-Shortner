const express = require('express');

const { handleURLShortner, handleRedirectURL, handleDeleteURL } = require("../controller/url");

const { checkForAuthentication, restrictTo } = require('../middlewares/auth');

const router = express.Router();

router.post('/', checkForAuthentication, restrictTo, handleURLShortner);

router.get('/:shortId', handleRedirectURL)

router.get('/delete/:shortId', handleDeleteURL)

module.exports = router;