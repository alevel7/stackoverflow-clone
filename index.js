const express = require("express")

//Import the mongoose module
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const qroutes = require("./routes")




//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/stackover-db';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    const app = express()
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())


    app.use(function(req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, PATCH, OPTIONS");
        res.header("Access-Control-Allow-Headers", "*");
        next()
    })
    app.use('/api/questions', qroutes)

    app.listen(5000, () => {
        console.log("Server has started!")
    })
})

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
    console.log("Connection Successful!");
});
