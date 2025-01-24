const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    BookID:{
        type: Number,
    },
    BookName:{
        type:String,
        required:true
    },
    BookDesc:{
        type:String,
        required:true
    },
    ImgUrl:{
        type:String,
        required:true
    },
    BookUrl:{
        type:String,
        required:true
    },
})
const Book = mongoose.model("Book",bookSchema);
module.exports = Book