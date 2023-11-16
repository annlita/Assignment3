let express = require('express');
let router = express.Router();
let mongoose = require('mongoose')
let Experience = require('../models/experience');


// Read Operation

 let ExperienceController = require('../controller/experience')
 /* Get route for the Experience list */
 // Read Operation
 router.get('/', ExperienceController.DislayExperiencelist);

/* Add Operation */
/* Get route for displaying Add operation - Create Operation*/
router.get('/add', ExperienceController.AddExperience);
/* Post route for displaying Add operation - Create Operation*/
router.post('/add', ExperienceController.ProcessExperience);
/* Edit Operation */
/* Get route for displaying Edit operation - Update Operation*/
router.get('/edit/:id', ExperienceController.EditExperience);
/* Post route for displaying Edit operation - Update Operation*/
router.post('/edit/:id', ExperienceController.ProcessEditExperience);
/* Delete Operation */
/* Get route for displaying Delete operation - Deletion*/
router.get('/delete/:id', ExperienceController.DeleteExperience);

 module.exports = router;