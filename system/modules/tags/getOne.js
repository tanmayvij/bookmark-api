const mongoose = require("mongoose");
const Tag = mongoose.model("Tag");

module.exports = (req, res) => {
    Tag.findById(req.params.id)
    .exec(function(err, data) {
        if(err) {
            res.status(500).json({"error": err})
        }
        else if(!data) {
            res.status(404).json({});
        }
        else {
            res.status(200).json(data);
        }
    });
};