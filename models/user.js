const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        min: 4,
        required: true
    },
    email: {
        type: String,
        min: 6,
        required: true
    },
    password: {
        type: String,
        min: 6,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("users1DB", userSchema)
