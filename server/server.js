const express = require("express");
const bodyParser = require("body-parser");

const {mongoose} = require("./db/mongoose.js");
const {Todo} = require("./models/todo");
const {USer} = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});



app.listen(3000, () => {
    console.log("Started on port 3000");
});

module.exports = {app};
