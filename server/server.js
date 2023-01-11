const express = require('express');
const connect = require("./assets/database")

const app = express();


const URI = "mongodb://localhost:27017/products-database";


// --Port //
const port = process.env.PORT || 8080;
app.listen(port, () =>{console.log(`Server is running at port ${port}`)});
