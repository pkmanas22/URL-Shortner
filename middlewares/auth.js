const { getUser } = require('../services/jwtAuth');

function checkForAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.uid;
    const sessionCookie = req.cookies?.s_uid;
    
    req.user = null;
    
    if(tokenCookie){
        const user = getUser(tokenCookie);
        req.user = user;
        return next();
    }else if(sessionCookie){
        const user = getUser(sessionCookie);
        req.user = user;
        return next();
    }else{
        return res.redirect("/trial");
    }
}

function restrictTo(req, res, next) {
    // console.log(req.user);
    if (!req.user) {
        return res.redirect("/trial");
    }
    return next();
}

module.exports = {
    checkForAuthentication,
    restrictTo,
};