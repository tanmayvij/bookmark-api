const express = require("express");
const router = express.Router();

router.route("/")
.get(require("./getAll"));

router.route("/:id")
.get(require("./getOne"));

router.route("/")
.post(require("./create"));

router.route("/:id")
.put(require("./updateTag"));

router.route("/:id")
.delete(require("./delete"));

module.exports = router;