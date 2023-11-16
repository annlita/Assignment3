let express = require('express');
let router = express.Router();

/* Display home page */
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
  };

  /* Display about page */
  module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About' });
  }

  /* Display projects page */
  module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { title: 'Projects' });
  }

  /* Display contact page */
  module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact' });
  }