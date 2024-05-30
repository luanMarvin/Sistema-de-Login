require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connect = require('./assets/database');
const router = require('./assets/routes');

//App declaration
const app = express();

//CORS
const url = process.env.URL ?? "";
const corsConfig = {
    origin: url ? [url] : "*",
    optionsSuccessStatus: 200,
};
app.use(cors(corsConfig)); //CORS - Enabled
app.use(express.json()); //Parsing Middleware
app.use('/api', router); //API routes

const URI = process.env.URI; //Database URI
connect(URI);

//Port
const port = 8080;
app.listen(port, () =>{console.log(`Servidor online na porta: ${port}`)});
const corsURL = url === "" ? "TODAS AS URL's" : url; //Fins Visuais 
console.log(`CORS Habilitado para: ${corsURL}`)
