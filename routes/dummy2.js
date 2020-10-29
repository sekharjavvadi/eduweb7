// const express=require('express')
// const router = express.Router()
// const mongoose=require('mongoose');
// const User=require('../models/user')
// const { ensureAuth2,ensureGuest }=require('../middleware/auth')
// var enrolledcourses=new Array();

// // load config
// const dotenv = require('dotenv');
// dotenv.config({path:'./config/config.env'});
// module.exports={
//     checkcourses:function(req,res,next){
//         User.findOne({googleid:req.user.googleid})
//         .then(function(doc){
//             if(!doc){ console.log("not founded user courses")}
//             else{
//                 console.log("user courses founded");
//                 enrolledcourses=doc.courses;
//                 console.log(enrolledcourses)
//             }
//             return next();
//         })
//     }
// }