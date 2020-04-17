const mongoose = require("mongoose");
const Bookmark = mongoose.model("Bookmark");

module.exports = (req, res) => {
    
    if(!req.body.tagId)
    {
        res.status(400).json({"error": "Tag ID must be specified in the request body."});
        return;
    }

    Bookmark.findById(req.params.id)
    .exec(function(err, data) {
        if(err) {
            res.status(500).json({"error": err})
        }
        else if(!data) {
            res.status(400).json({"error": "Bookmark doesn't exist."});
        }
        else {
            if(req.query.action == "attach")
            {
                var flag = 0;
                data.tags.forEach(element => {
                    if(element === req.body.tagId)
                    {
                        flag = 1;
                    }
                });
                if(flag) {
                    res.status(400).json({"error": "This tag is already attached to the bookmark."});
                    return;
                }
                else {
                    data.tags.push(req.body.tagId);
                    data.time_updated = Date.now();
                    data.save(function(err, result) {
                        if(err) {
                            res.status(500).json({"error": err});
                        }
                        else {
                            res.status(200).json({"success": true});
                        }
                    });
                }
            }
            else if(req.query.action == "remove")
            {
                var flag = 0;
                data.tags.forEach(element => {
                    if(element === req.body.tagId)
                    {
                        flag = 1;
                        data.tags.splice(data.tags.indexOf(element), 1);
                    }
                });
                if(flag) {
                    data.time_updated = Date.now();
                    data.save(function(err, result) {
                        if(err) {
                            res.status(500).json({"error": err})
                        }
                        else {
                            res.status(200).json({"success": true});
                        }
                    });
                }
                else {
                    res.status(400).json({"error": "This tag is NOT attached to this bookmark."});
                    return;
                }
            }
            else
            {
                res.status(400).json({"error": "Please specify a valid action."});
            }
        }
    });
};