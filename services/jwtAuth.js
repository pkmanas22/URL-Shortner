const jwt = require("jsonwebtoken")
require('dotenv').config();  // Load environment variables from .env file

const secretKey = process.env.SECRET_KEY;

function setUser(user) {
    const payLoad = {
        _id: user._id,
        name: user.name,
        email: user.email,
        date: user.createdAt
    }

    return jwt.sign(payLoad, secretKey);
}

function getUser(token){
    if (!token) {
        return null;
    }

    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        console.error("Error while verifying JWT:", error);
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}