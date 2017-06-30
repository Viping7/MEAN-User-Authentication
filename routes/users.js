var express=require('express');
var router=express.Router();
var User=require('../models/users.js');
router.post('/register',function(req,res){
    let newUser=new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    })
    User.addUser(newUser,function(err,user){
        if(err){
            res.json({success:false});
        }
        else{
            res.json({success:true});
        }
    })
})

router.get('/authentication',function(req,res){
  
})

router.get('/profile',function(req,res){
    res.send('profile');
})

module.exports=router;