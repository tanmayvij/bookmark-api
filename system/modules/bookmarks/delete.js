const mongoose = require("mongoose");
const Bookmark = mongoose.model("Bookmark");

module.exports = (req, res) => {
    Bookmark.findByIdAndDelete(req.params.id)
    .exec(function(err, data) {
        if(err) {
            res.status(500).json({"error": err})
        }
        else if(!data) {
            res.status(400).json({"error": "Bookmark doesn't exist."});
        }
        else {
            res.status(200).json({"success": true});
        }
    });
};