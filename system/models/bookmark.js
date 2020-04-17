const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "link": {
        type: String,
        required: true,
        unique: true
    },
    "time_created": {
        type: Number,
        default: Date.now()
    },
    "time_updated": {
        type: Number,
        default: Date.now()
    },
    "publisher": {
        type: String,
        required: true
    },
    "tags": {
        type: [String]
    }
});

mongoose.model("Bookmark", schema, "bookmarks");