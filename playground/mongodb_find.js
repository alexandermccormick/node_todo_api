// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB serve");
    const db = client.db("TodoApp");

    // db.collection("Todos").find({
    //     _id: new ObjectID('5ad5137dda1014403b26ba9c')
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection("Users").find({name: "Alex"}).toArray().then((docs) => {
        console.log("Alexs",);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("unable to fetch user(s)");
    })
    
    // client.close();
});