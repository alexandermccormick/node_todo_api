const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// const id = "5ad7c421fa8e403b2f8f2439";

// if (!ObjectID.isValid(id)) {
//     console.log("id not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("todo", todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log("id not found");
//     }
//     console.log("todo by id", todo);
// }).catch((e) => console.log(e));

const userId = "5ad652bf2e786d13b6a453d2";

User.findById(userId).then((user) => {
    if (!user) {
        return console.log("user not found");
    }
    console.log("found user by id", user);
}).catch((e) => console.log(e))