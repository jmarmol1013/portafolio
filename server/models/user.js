// require modules for the user model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let user = mongoose.Schema({
    username : {
        type : String,
        default : '',
        trim : true,
        required : 'username is required'
    },
    // password:{
    //     type : String,
    //     default : '',
    //     trim : true,
    //     required : 'password is required'
    // },
    displayName :{
        type : String,
        default : '',
        trim : true,
        required : 'display name  is required'
    },
    created :{
        type : Date,
        default : Date.now
    },
    update :{
        type : String,
        default : Date.now
    }
},
{
    collection : "users"  
}
);
// configure options for user module
let options = ({
    missingPassWordError : 'Wrong or missing password'
});

user.plugin(passportLocalMongoose,options);
module.exports.user = mongoose.model('user',user);