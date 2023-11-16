//* Creating routes *//

let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');
/* GET home page. */
router.get('/', indexController.displayHomePage );

/* GET home page. */
router.get('/home', indexController.displayHomePage );


/* GET about page. */
router.get('/about', indexController.displayAboutPage );

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage );


/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
