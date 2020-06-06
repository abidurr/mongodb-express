const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

// connect mongoose
mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to MongoDB!")
);

PORT = process.env.PORT || 3000;

app.listen(PORT);
