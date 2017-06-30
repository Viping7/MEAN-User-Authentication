var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var cors=require('cors');
var passport =require('passport');
var mongoose=require('mongoose');
var users=require('./routes/users');
var config=require('./config/database');
var app=express();
app.use(cors());
mongoose.connect(config.database);

mongoose.connection.on("connected",function(){
    console.log("connected");
})
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/users',users);

app.listen(3000,function(){
    console.log("listening")
})