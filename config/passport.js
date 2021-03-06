var JwtStrategy=require('passport-jwt').Strategy;
var ExtractJwt=require('passport-jwt').ExtractJwt;
var user= require('../models/users');
var config=require('./database');


module.exports=function(passport){
var opts={};
opts.jwtFromRequest=ExtractJwt.fromAuthHeader();
opts.secretOrKey=config.secret;
passport.use(new JwtStrategy(opts,function(jwt_payload,done){
	console.log(jwt_payload);
	user.getUserById(jwt_payload._doc._id,function(err,user){
		if(err){
			return done(err,false);
		}
		if(user){
			return done(null,user)
		}
		else{
			return done(null,false);
		}
	});
}));
}
