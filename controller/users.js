const UserModel = require('../models/users');
const { setUser } = require('../services/jwtAuth')

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    // console.log(name + email + password);

    const existingEmail = await UserModel.findOne({ email });
    // console.log(existingEmail ? existingEmail.email + " " + email : "No existing email found");

    if (existingEmail && email === existingEmail.email) {
        const errorMessage = `The provided email address is already registered with us. Please use a different email address.`;
        return res.render("trialPage", { error: errorMessage });
    }

    try {
        const newUser = await UserModel.create({
            name,
            email,
            password
        });

        const token = setUser(newUser);
        res.cookie("s_uid", token);

        res.redirect('/');
    } catch (error) {
        console.error("Error while signup: ", error);
        const errorMessage = "An error occurred during signup. Please try again.";
        res.render("trialPage", { error: errorMessage });
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
            const errorMessage = "Invalid Username or password";
            return res.render("trialPage", { error: errorMessage });
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
        console.error(error + ": Error during login");
        const errorMessage = "An unexpected error occurred during login.";
        res.render("trialPage", { error: errorMessage });
    }
}

async function handleUserLogout(req, res) {

    res.redirect("/trial");
}

module.exports = {
    handleUserLogin,
    handleUserSignup,
    handleUserLogout
}