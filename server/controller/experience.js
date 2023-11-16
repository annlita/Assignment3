let express = require('express');
let router = express.Router();
let Experience = require('../models/experience');

/* Display experience list */
module.exports.DislayExperiencelist = async (req,res,next)=>{ //< Mark function as async
    try{
        /* fetching experience list */
       const ExperienceList = await Experience.find(); //< Use of await keyword
       /* rendering experience list */
       res.render('experience/list', {
          title: 'Experience', 
          ExperienceList: ExperienceList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('experience/list', {
          error: 'Error on server'
       });
    }
 };

 /* Render to add new experience */
 module.exports.AddExperience = async (req,res,next)=>{
    try{
        res.render('experience/add',
        {
            title:'Add Experience'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('experience/list',
        {
            error: 'Error on the server'
        });
    }
};

/* Process to add new experience  */
module.exports.ProcessExperience = async (req,res,next)=>{
    try{
        let newExperience = Experience({
            "Title":req.body.Title,
            "Organization": req.body.Organization,
            "StartDate": req.body.StartDate,
            "EndDate": req.body.EndDate,
            "Place": req.body.Place
        });
        /* Save new experience  */
        Experience.create(newExperience).then(() =>{
            res.redirect('/experience-list')
        })
    }
    catch(error){
        console.error(err);
        res.render('experience/list',
        {
            error: 'Error on the server'
        });
    }
};

/* Render to edit experience */
module.exports.EditExperience = async (req,res,next)=>{
    try{
        /* Retrieve experience */
    const id = req.params.id;
    /* Render to edit */
    const experienceToEdit = await Experience.findById(id);
    res.render('experience/edit',
    {
        title:'Edit Experience',
        Experience:experienceToEdit
    })
}
catch(error){
    console.error(err);
    res.render('experience/list',
    {
        error: 'Error on the server'
    });
}
}

/* Process to update */
module.exports.ProcessEditExperience = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedExperience = Experience({
            "_id":id,
            "Title":req.body.Title,
            "Organization": req.body.Organization,
            "StartDate": req.body.StartDate,
            "EndDate": req.body.EndDate,
            "Place": req.body.Place
        });
        /* Create updated form and redirect */
        Experience.findByIdAndUpdate(id,updatedExperience).then(()=>{
            res.redirect('/experience-list')
        });
    }
    catch(error){
        console.error(err);
        res.render('experience/list',
        {
            error: 'Error on the server'
        });
    }
}
/* Delete Experience */
module.exports.DeleteExperience = (req,res,next)=>{
    try{
        let id = req.params.id;
        Experience.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/experience-list')
        })
    }
    catch(error){
        console.error(err);
        res.render('experience/list',
        {
            error: 'Error on the server'
        });
    }
}