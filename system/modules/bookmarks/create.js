const mongoose = require("mongoose");
const Bookmark = mongoose.model("Bookmark");

module.exports = (req, res) => {

    if(!req.body.title || !req.body.link || !req.body.publisher)
    {
        res.status(400).json({"error": "Params missing"});
        return;
    }

    var newEntry = {
        "title": req.body.title,
        "link": req.body.link,
        "publisher": req.body.publisher
    };

    Bookmark.create(newEntry, function(err, data) {
        if(err) {
            res.status(500).json({"error": err})
        }
        else {
            res.status(201).json({"success": true, data});
        }
    });
};