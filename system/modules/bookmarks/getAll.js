const mongoose = require("mongoose");
const Bookmark = mongoose.model("Bookmark");

module.exports = (req, res) => {
    if(req.query.tag) {
        Bookmark.aggregate([
            {
                $match: {"tags": req.query.tag}
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
                res.status(404).json([]);
            }
            else {
                res.status(200).json(data)
            }
        });
    }
    else {
        Bookmark.aggregate([
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
    }
};