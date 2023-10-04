require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlmenu = require('../controllers/menu');
var ctrlcontact = require('../controllers/contact');

/* GET menu page. */
router.get('/',ctrlmenu.home);
router.get('/menu',ctrlmenu.menu);
router.get('/nonveg',ctrlmenu.nonveg);
router.get('/veg',ctrlmenu.veg);
router.get('/desert',ctrlmenu.desert);
/* get contact page */
router.get('/aboutus',ctrlcontact.aboutus);
router.get('/contact', ctrlcontact.contact);
router.get('/reserve', ctrlcontact.reservation);
module.exports= router;