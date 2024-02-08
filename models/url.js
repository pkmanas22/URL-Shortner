// Import necessary modules
const mongoose = require("mongoose");

// Define schema
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [
        {
            timestamps: { type: Number},
        }
    ],
    createdBY: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    
}, {
    // Add timestamps for createdAt and updatedAt
    timestamps: true
});


// Create model
const URLModel = mongoose.model('urls', urlSchema);


// Export the model
module.exports = URLModel;