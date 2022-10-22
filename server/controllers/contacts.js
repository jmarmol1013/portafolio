let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let Contact = require('../models/contacts');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)return console.error(err);
        else
        {
            console.log(contactList);
            res.render('contacts/list', {title: 'Contacts', contactList: contactList});      
        }
    });
}

module.exports.displayAddPage = (req,res ,next) =>{
    res.render('contacts/add',{title:'Add contact'});
}

module.exports.processAddPage = (req,res,next)=>{
    let newContact = Contact({
        "name" : req.body.name,
        "phone" : req.body.phone,
        "mail" : req.body.mail
    });

    Contact.create(newContact, (err,Contact) =>{
        if(err) res.end(err);
        res.redirect('/contact-list');
    });
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)res.end(err);
        else res.render('contacts/edit', {title: 'Edit Contact', contact: contactToEdit});
    });
}

module.exports.processEditPage = (req,res,next) =>{
    let id =req.params.id;

    let contactUpdated = Contact({
        "_id" : id,
        "name" : req.body.name,
        "phone" : req.body.phone,
        "mail" : req.body.mail
    });

    Contact.updateOne({_id : id}, contactUpdated , (err)=>{
        if (err) res.end(err);
        else{
            res.redirect('/contact-list');
        }
       
    });
}

module.exports.performDelete = (req,res,next) =>{
    let id = req.params.id;

    Contact.remove({_id : id}, (err)=>{
        if (err) res.end(err)
        else{
            res.redirect('/contact-list');
        }
    })
}