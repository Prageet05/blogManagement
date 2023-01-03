const express = require('express');
const mongoose = require('mongoose');
const route = require('./route/route');
const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://prageet:4zGItzVIrinYLkAI@myproject.kthcntq.mongodb.net/blogproject")
.then( () => {console.log( "MongoDb is connected")}  )
.catch( err => console.log(err))

app.use('/', route);
app.listen(3000, function() {console.log("Express app running on port 3000")})