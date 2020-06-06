const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// get all posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.json({ msg: err });
    }
});

// submit a post
router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
    });
    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(418).json({ msg: err });
    }
});

// get specific post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(418).json({ msg: err });
    }
});

module.exports = router;
