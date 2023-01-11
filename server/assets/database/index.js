const mongoose = require("mongoose");

function connect(URI){
    mongoose.connect(URI);
    const db = mongoose.connection;


    db.once("open", () => console.log(`Connectado ao banco de dados`));
}

module.exports = {connect};
