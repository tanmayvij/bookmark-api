const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    "title": {
        "type": String,
        "required": true,
        "unique": true
    },
    "time_created": {
        "type": Number,
        "default": Date.now()
    },
    "time_updated": {
        "type": Number,
        "default": Date.now()
    }
});

mongoose.model("Tag", schema, "tags");