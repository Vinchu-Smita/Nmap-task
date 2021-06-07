const express = require('express')
var validator = require('validator');
require('dotenv').config()
var bodyParser = require('body-parser')
var multer  = require('multer')
var cRoute =require("./routes/commonRoute")
var CCntrl =require("./Controller/CommonCntrl");
const mongoose = require('mongoose');

async function dbConnect(){
await mongoose.connect('mongodb://localhost:27017/smita', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
}
dbConnect();
const app = express()

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
app.use('/public',express.static('assets'));

app.use("/",cRoute)
app.listen(process.env.PORT,process.env.HOST, function(req,res){
    console.log("Server Running")
});