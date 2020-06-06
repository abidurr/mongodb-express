const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.json({ msg: err })
    }
});

router.get("/specific", (req, res) => res.send("Hello world posts/specific!"));

router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
    });
    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(418).json({ msg: err })
    }
});

module.exports = router;
