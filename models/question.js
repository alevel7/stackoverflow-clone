const mongoose = require('mongoose');

// create a schema for the  question
//Define a schema
const  Schema = mongoose.Schema;

const questionSchema = Schema({
    question: {
        type:String,
        min:4,
        required:true
    },
    language:{
        type:String,
        min:1,
        required:true
    },
    date: {
        type:Date,
        default:Date.now()
    },
    comment:[String]
})

// Compile model from schema
module.exports = mongoose.model('question', questionSchema );

// create a schema for the comment

