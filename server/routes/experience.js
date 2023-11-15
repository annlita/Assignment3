var express = require('express');
var router = express.Router();
let mongoose = require('mongoose')
//const { router } = require('../config/app');
let Experience = require('../models/experience');
/*let BookController = require('../controllers/Bio_books')*/

/* Get route for the Bio Books list */

// Read Operation
/*
router.get('/books',(req,res,next) => {
    Book.find((err,BookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(BookList);
        }
    });
});*/

/* hi router.get('/', async (req,res,next)=>{ //< Mark function as async
    try{
       const ExperienceList = await Experience.find(); //< Use of await keyword
       res.render('experience/list', {
          title: 'Experience', 
          ExperienceList: ExperienceList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('experience', {
          error: 'Error on server'
       });
    }
 }); bye*/

 let ExperienceController = require('../controller/experience')
 /* Get route for the Bio Books list */
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