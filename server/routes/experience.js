let express = require('express');
let router = express.Router();
let mongoose = require('mongoose')
let Experience = require('../models/experience');


// Read Operation

 let ExperienceController = require('../controller/experience')

 // helper function
function requireAuth(req,res,next){
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}
 /* Get route for the Experience list */
 // Read Operation
 router.get('/', ExperienceController.DislayExperiencelist);

/* Add Operation */
/* Get route for displaying Add operation - Create Operation*/
router.get('/add',requireAuth, ExperienceController.AddExperience);
/* Post route for displaying Add operation - Create Operation*/
router.post('/add', requireAuth, ExperienceController.ProcessExperience);
/* Edit Operation */
/* Get route for displaying Edit operation - Update Operation*/
router.get('/edit/:id', requireAuth, ExperienceController.EditExperience);
/* Post route for displaying Edit operation - Update Operation*/
router.post('/edit/:id', requireAuth, ExperienceController.ProcessEditExperience);
/* Delete Operation */
/* Get route for displaying Delete operation - Deletion*/
router.get('/delete/:id', requireAuth, ExperienceController.DeleteExperience);

 module.exports = router;