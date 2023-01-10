const mongoose = require("mongoose");

function connect(){
    mongoURI = "mongodb://localhost:27017/products-database";
    mongoose.connect(mongoURI);
    const db = mongoose.connection


    db.once("open")
}

module.exports = {connect};
