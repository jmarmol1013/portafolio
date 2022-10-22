let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

// GET LogIn page
router.get('/login',indexController.displayLogInPage);
// POST LogIn page
router.post('/login',indexController.processLogInPage);

// GET registration page
router.get('/registration',indexController.displayRegistrationPage);
// POST registration page
router.post('/registration',indexController.processRegistraionPage);

module.exports = router;
