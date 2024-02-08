// requiring dotenv
require('dotenv').config()

// Importing required modules
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const { connectToMongoDB } = require('./connector');
const { checkForAuthentication, restrictTo } = require('./middlewares/auth');

const staticRoute = require('./routers/staticRoute');
const urlRoute = require('./routers/urls');
const userRoute = require('./routers/users');

const URLModel = require('./models/url');
const UserModel = require('./models/users');

// Creating an Express application
const app = express();
const PORT = process.env.PORT || 8000;      // for dynamically change by service provider

// MongoDB connection
// connectToMongoDB("mongodb://127.0.0.1:27017/urlShortnerProject")         --> local mongoDB
connectToMongoDB(process.env.MONGO_URL)         // online mongo
    .then(() => console.log("Mongo connected successfully"))
    .catch((err) => console.error("Error while connecting to MongoDb"))

// Configuring EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middleware setup
app.use(express.json()); // JSON parsing middleware
app.use(express.urlencoded({ extended: false })) // Form data parsing middleware
app.use(cookieParser()) // Cookie parsing middleware

// we have to give access which is used in ejs
app.use('/css', express.static(path.resolve('./views/css'), { 'extensions': ['css'] }));
app.use('/res', express.static(path.resolve("./views/res")));
app.use('/js', express.static(path.resolve("./views/js")));

// Define your routes and middleware here
app.get('/', checkForAuthentication, restrictTo, async (req, res) => {
    const allUrls = await URLModel.find({
        createdBY: req.user._id,
    });
    // console.log(allUrls);

    return res.render("homePage", {
        urls: allUrls,
        profileName: req.user.name,
    });

})

app.use('/url', urlRoute);

app.use('/trial', staticRoute);
app.use('/', userRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});