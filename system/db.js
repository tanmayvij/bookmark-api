const db = require("../config.json").db;
const mongoose = require("mongoose");

mongoose.connect(db.uri, {useUnifiedTopology: true, useNewUrlParser: true});

require("./models/bookmark");
require("./models/tag");