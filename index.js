const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 4000;

// using as middleware
app.use('/', function(req,res){
  res.send("hello")
})

// listen for requests
app.listen(port, () => {
    console.log(`Node server is listening on port ${port}`);
});