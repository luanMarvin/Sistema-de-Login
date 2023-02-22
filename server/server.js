const express = require('express');
const cors = require('cors');
const connect = require('./assets/database');
const router = require('./assets/routes');

const app = express();
app.use(express.json());
app.use('/api', router);
var corsConfig = {
    origin: ["http://127.0.0.1:5500"],
    optionsSuccessStatus: 200
}
app.use(cors(corsConfig));

const URI = "mongodb://localhost:27017/sistema-de-login";
connect(URI);


// --Port //
const port = process.env.PORT || 8080;
app.listen(port, () =>{console.log(`Server is running at port ${port}`)});
