const express = require('express');

const app = express();



// --Port //
const port = process.env.PORT || 8080;
app.listen(port, () =>{console.log(`Server is running at port ${port}`)});