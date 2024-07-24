const mongoose = require("mongoose");
const {Schema} = mongoose;

const carpetSchema = Schema({
    title: String,
    image:[
        {
            url:String
        }
    ],
    color: String,
    value:[
        {
            size:String,
            price:String
        }
    ] ,
    category:String,
    feature:String
})

const Carpet = mongoose.model("Carpet",carpetSchema);

module.exports =  Carpet;

