require("./system/db");
const express = require("express");
const app = express();
const bprsr = require("body-parser");
const bookmarks = require("./system/modules/bookmarks");
const tags = require("./system/modules/tags");
const config = require('./config.json');

// Set listening port
app.set('port', process.env.NODE_ENV == "production" ? process.env.PORT : config.devPort);

// Set headers
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type, X-Requested-With");
    next();
});

// Parse request body
app.use(bprsr.json({"limit": "5mb"}));
app.use(express.urlencoded());

// Endpoints
app.use("/api/bookmarks", bookmarks);
app.use("/api/tags", tags);
app.use("/", (req, res) =>  res.send(`BOOKMARKING APPLICATION API<br>
<a href='https://github.com/tanmayvij/bookmark-api'>GitHub Repository</a><br>
You're seeing this page because the endpoint/method combination you're accessing does not exist.`));

// Start listening for requests
const server = app.listen(app.get('port'), () => {
    console.log(server.address());
})
