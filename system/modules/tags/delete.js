const mongoose = require("mongoose");
const Tag = mongoose.model("Tag");

module.exports = (req, res) => {
    Tag.findByIdAndDelete(req.params.id)
    .exec(function(err, data) {
        if(err) {
            res.status(500).json({"error": err})
        }
        else if(!data) {
            res.status(400).json({"error": "Tag doesn't exist."});
        }
        else {
            res.status(200).json({"success": true});
        }
    });
};