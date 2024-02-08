
const shortId = require('short-id');
const URLModel = require('../models/url');
const { catchErrorMsg } = require("../views/js/catchErrorMsg");

async function handleURLShortner(req, res) {
    try {
        const url = req.body.url;
        // console.log(url);

        if (!url) {
            return res.status(400).send({ error: "URL is required" });
        }
        const generatedId = shortId.generate();
        // console.log(generatedId);

        await URLModel.create({
            shortId: generatedId,
            redirectUrl: url,
            visitHistory: [],
            createdBY: req.user._id,
        })

        res.redirect('/');
    } catch (error) {
        console.error("An unexpected error occurred:", error);
        const myDomain = req.protocol + '://' + req.get('host');
        const errorMessage = "Oops! Something went wrong. We're working to fix it. Please go back to the <a href=\"" + myDomain + "\">home page</a> and try again.";
        res.status(500).send(catchErrorMsg(errorMessage));
    }
}

async function handleRedirectURL(req, res) {
    const shortId = req.params.shortId;
    // console.log(shortId);

    try {
        const findEntry = await URLModel.findOneAndUpdate({
            shortId
        }, {
            $push: {
                visitHistory: {
                    timeStamp: Date.now()
                }
            }
        })

        if (findEntry !== null) {
            // console.log(findEntry.shortId);
            res.redirect(findEntry.redirectUrl);
        } else {
            console.error("Document not found");
            const myDomain = req.protocol + '://' + req.get('host');
            const errorMessage = `The requested URL was not found. Please try shortening another URL on our platform: <a href="${myDomain}">${myDomain}</a>`;

            res.status(404).send(catchErrorMsg(errorMessage));
        }
    } catch (error) {
        console.error("Error:", error);
        const errorMessage = "Internal Server Error";
        res.status(500).send(catchErrorMsg(errorMessage));
    }

}
async function handleDeleteURL(req, res) {
    try {
        const shortId = req.params.shortId;

        await URLModel.findOneAndDelete({
            shortId
        })

        res.redirect('/');
    } catch (error) {
        console.error("Error:", error);
        const errorMessage = "Internal Server Error";
        res.status(500).send(catchErrorMsg(errorMessage));
    }
}

module.exports = {
    handleURLShortner,
    handleRedirectURL,
    handleDeleteURL,
}