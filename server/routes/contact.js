let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
// connect to our Book Model
let contact = require('../models/contacts');
let contactController = require('../controllers/contacts');

router.get('/', contactController.displayContactList);

router.get('/add',contactController.displayAddPage);

router.post('/add',contactController.processAddPage);

router.get('/edit/:id',contactController.displayEditPage);

router.post('/edit/:id',contactController.processEditPage);

router.get('/delete/:id',contactController.performDelete);

module.exports = router;