let express = require('express');
let router = express.Router();

/* Display home page */
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { 
      title: 'Home',
      displayName: req.user ? req.user.displayName:''});
  };

  /* Display about page */
  module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { 
      title: 'About',
      displayName: req.user ? req.user.displayName:'' });
  };

  /* Display projects page */
  module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { 
      title: 'Projects',
      displayName: req.user ? req.user.displayName:'' });
  };

  /* Display contact page */
  module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { 
      title: 'Contact',
      displayName: req.user ? req.user.displayName:'' });
  };