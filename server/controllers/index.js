let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { use } = require('passport');
let passport = require('passport');
let UserModel = require('../models/user');
let User = UserModel.user;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About'});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact'});
}

module.exports.displayLogInPage = (req,res,next) =>{
    if(!req.User){
        res.render('auth/logIn',{
            title : 'LogIn',
            messages : req.flash('LoginMessage'),
            displayName : req.User ? req.User.displayName : '',
            currentUser : req.User
        });
    } else{
        return res.redirect('/')
    }
}

module.exports.processLogInPage = (req,res,next) =>{
    passport.authenticate('local',(err,User,info)=>{
        if(err) return next(err);
        if(!User){
            req.flash(
                'loginMessage',
                'authentication Error',
                'errors'
            );
            return res.redirect('login');
        }
        req.login(User,(err)=>{
            if(err) return next(err);

            return res.redirect('/contact-list');
        })
    })(req,res,next);
}

module.exports.displayRegistrationPage = (req,res,next) =>{
    if(!req.User){
        res.render('auth/registration',{
            title : 'Register',
            messages : req.flash('RegisterMessage'),
            displayName : req.User ? req.User.displayName :'',
        });
    }else{
        return res.redirect('/');
    }
}

module.exports.processRegistraionPage = (req,res,next) =>{
    let newUser = User({
        username : req.body.username,
        //password : req.body.password,
        displayName : req.body.displayName
    });


    User.register(newUser,req.body.password,(err)=>{
        if(err) {
            console.log("Error inserting new user");
            if (err.name == "UserExitsError"){
                req.flash(
                    'registerMessage',
                    'Registration Error : User already exists'
                );
                console.log("Error: User Already exits");
            }
            return res.render('auth/registration',{
                title : 'Register',
                messages : req.flash('RegisterMessage'),
                displayName : req.User ? req.User.displayName :'' 
            })
        }else{
            return passport.authenticate('local')(req,res,()=>{
                res.redirect('/contact-list')
            })
        }
    });
}

module.exports.perfromLogOut = (req,res,next) =>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}