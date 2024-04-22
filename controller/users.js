const UserModel = require('../models/users');
const { setUser } = require('../services/jwtAuth');

const originUrl = process.env.HOST_URL;

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;

    try {
        const existingEmail = await UserModel.findOne({ email });

        if (existingEmail && email === existingEmail.email) {
            const errorMessage = `The provided email address is already registered with us. Please use a different email address.`;
            return res.render("trialPage", { error: errorMessage, originUrl });
        }

        const newUser = await UserModel.create({
            name,
            email,
            password
        });

        const token = setUser(newUser);
        res.cookie("s_uid", token);

        res.redirect('/');
    } catch (error) {
        console.error("Error while signing up: ", error);
        const errorMessage = "An error occurred during signup. Please try again.";
        res.render("trialPage", { error: errorMessage, originUrl });
    }
}

async function handleUserLogin(req, res) {
    try {
        const { email, password } = req.body;
        const { rememberMe } = req.body;
        // console.log(rememberMe);

        const user = await UserModel.findOne({ email, password });
        // console.log(user);
        if (!user) {
            const errorMessage = "Invalid username or password.";
            return res.render("trialPage", { error: errorMessage, originUrl });
        }

        const token = setUser(user);
        if (rememberMe) {
            res.cookie("uid", token, { maxAge: 30 * 24 * 60 * 60 * 1000 }); // Expires in 30 days
            // console.log("Token cookie set:", token);
        } else {
            res.cookie("s_uid", token);
        }

        res.redirect("/");
    } catch (error) {
        console.error("Error while logging in: ", error);
        const errorMessage = "An unexpected error occurred during login.";
        res.render("trialPage", { error: errorMessage, originUrl });
    }
}

async function handleUserLogout(req, res) {
    try {
        // Clear the user session
        res.clearCookie("uid");
        res.clearCookie("s_uid");
        res.redirect("/trial");
    } catch (error) {
        console.error("Error while logging out: ", error);
        const errorMessage = "An unexpected error occurred during logout.";
        res.render("trialPage", { error: errorMessage, originUrl });
    }
}

module.exports = {
    handleUserLogin,
    handleUserSignup,
    handleUserLogout
};
