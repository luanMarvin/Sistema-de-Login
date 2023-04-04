const express = require('express');
const cors = require('cors');
const connect = require('./assets/database');
const router = require('./assets/routes');

//App declaration
const app = express();

//CORS
const corsConfig = {
    origin: ['http://localhost:5500','http://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
};
app.use(cors(corsConfig)); //CORS - Enabled
app.use(express.json()); //Parsing Middleware
app.use('/api', router); //API routes

const URI = "mongodb://127.0.0.1:27017/sistema-de-login"; //Database URI
connect(URI);


//Port
const port = process.env.PORT || 8080;
app.listen(port, () =>{console.log(`Server is running at port ${port}`)});
