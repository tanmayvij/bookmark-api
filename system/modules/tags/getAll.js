const mongoose = require("mongoose");
const Tag = mongoose.model("Tag");

module.exports = (req, res) => {
    Tag.find()
    .exec(function(err, data) {
        if(err) {console.log(err)
            res.status(500).json({"error": err})
        }
        else if(!data || data.length === 0) {
            res.status(404).json([]);
        }
        else {
            res.status(200).json(data)
        }
    });
};