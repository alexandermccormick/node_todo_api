const mongoose = require("mongoose");

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

module.exports = {User};
