
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postCreate = new Schema({

    image: {
        type: String
    },
    title: {
        type: String
    },
    message: {
        type: String
    }
})

module.exports = mongoose.model('post', postCreate)