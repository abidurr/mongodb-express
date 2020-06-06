const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postsRoute = require("./routes/posts");
require("dotenv/config");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => res.send("Hello world form home!!"));
app.use("/posts", postsRoute);

// connect mongoose
mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to MongoDB!")
);

PORT = process.env.PORT || 3000;

app.listen(PORT);

/*
fetch("http://localhost:3000/posts")
.then( results => return result.json() )
.then( data => console.log(data) )
*/