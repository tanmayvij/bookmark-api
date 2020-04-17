const mongoose = require("mongoose");
const Bookmark = mongoose.model("Bookmark");

module.exports = (req, res) => {
    Bookmark.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(req.params.id)
            }
        },
        {
            $lookup: {
                from: 'tags',
                localField: 'tags',
                foreignField: 'title',
                as: 'tags'
            }
        }
    ])
    .exec(function(err, data) {
        if(err) {
            res.status(500).json({"error": err})
        }
        else if(!data || data.length === 0) {
            res.status(404).json({});
        }
        else {
            res.status(200).json(data[0]);
        }
    });
};