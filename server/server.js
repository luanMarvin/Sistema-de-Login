const express = require('express');
const cors = require('cors');
const connect = require('./assets/database');
const router = require('./assets/routes');

var corsConfig = {
    origin: ["http://127.0.0.1:5500/"],
    optionsSuccessStatus: 200
};

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);


const URI = "mongodb://localhost:27017/sistema-de-login";
connect(URI);


// --Port //
const port = process.env.PORT || 8080;
app.listen(port, () =>{console.log(`Server is running at port ${port}`)});

module.exports = URI