const mongoose = require("mongoose");
const Tag = mongoose.model("Tag");

module.exports = (req, res) => {

    if(!req.body.title)
    {
        res.status(400).json({"error": "Params missing"});
        return;
    }

    var newEntry = {
        "title": req.body.title
    };

    Tag.create(newEntry, function(err, data) {
        if(err) {
            res.status(500).json({"error": err})
        }
        else {
            res.status(201).json({"success": true, data});
        }
    });
};