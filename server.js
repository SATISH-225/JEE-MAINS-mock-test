const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "fn", "signup.html"));
});

app.use(express.static(path.join(__dirname, "fn")));

app.get("/test", (req, res) => {
    res.sendFile(path.join(__dirname, "fn", "index.html"));
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
