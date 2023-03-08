const express = require('express');
const cors = require('cors');
const connect = require('./assets/database');
const router = require('./assets/routes');

//App declaration
const app = express();

//CORS
const corsConfig = {
    origin: 'http://127.0.0.1:5050',
    optionsSuccessStatus: 200,
};
app.use(cors()); //CORS - Disabled
app.use(express.json()); //Parsing Middleware
app.use('/api', router); //API routes

//Database Connection
const URI = "mongodb://localhost:27017/sistema-de-login";
connect(URI);


//Port
const port = process.env.PORT || 8080;
app.listen(port, () =>{console.log(`Server is running at port ${port}`)});

//Exports
module.exports = URI