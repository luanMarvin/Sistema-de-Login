const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    surName: String,
    email: String,
    password: String
});

const Model = mongoose.model("users", userSchema);

module.exports = Model;