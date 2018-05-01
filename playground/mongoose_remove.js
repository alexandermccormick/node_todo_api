const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Both return doc
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: "5ae8b90bb2469129de5567fd"}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove("5ae8b90bb2469129de5567fd").then((todo) => {
    console.log(todo);
});