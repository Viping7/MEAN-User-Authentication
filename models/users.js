var mongoose=require('mongoose');
var bcrypt=require('bcryptjs');
var config=require('../config/database');

var userSchema=mongoose.Schema({
    name:{
     type:String   
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const User=module.exports=mongoose.model('users',userSchema);
module.exports.getUsers=function(callback){
    User.find(callback);
}
module.exports.getUserById=function(id,callback){
    User.findById(id,callback);
}
module.exports.getUserByUsername=function(username,callback){
    var data={
        username:username
    }
    User.findOne(data,callback);
}

module.exports.addUser=function(newUser,callback){
    var data={
        username:newUser.username
    }
    bcrypt.hash(newUser.password,10,function(err,hash){
        newUser.password=hash;
       newUser.save(callback);
           
    });
}
module.exports.comparePassword=function(password,hash,callback){
	bcrypt.compare(password,hash,function(err,isMatch){
       console.log(password,hash);
		if(err) throw err;
		else{
			callback(null,isMatch);
		}
	})
}