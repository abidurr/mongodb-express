const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("Hello world from posts!"));

router.get("/specific", (req, res) => res.send("Hello world posts/specific!"));

module.exports = router;