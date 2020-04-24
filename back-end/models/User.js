var mongoose = require("mongoose");
var plm = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'users'
});

userSchema.plugin(plm);

var User = mongoose.model('User', userSchema);

module.exports = User;