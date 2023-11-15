var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Experience = require('../models/experience');

module.exports.DislayExperiencelist = async (req,res,next)=>{ //< Mark function as async
    try{
       const ExperienceList = await Experience.find(); //< Use of await keyword
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

module.exports.ProcessExperience = async (req,res,next)=>{
    try{
        let newExperience = Experience({
            "Title":req.body.Title,
            "Organization": req.body.Organization,
            "StartDate": req.body.StartDate,
            "EndDate": req.body.EndDate,
            "Place": req.body.Place
        });
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

module.exports.EditExperience = async (req,res,next)=>{
    try{
    const id = req.params.id;
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

module.exports.ProcessEditExperience = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedExperience = Experience({
            "_id":id,
            "Title":req.body.Name,
            "Organization": req.body.Organization,
            "StartDate": req.body.StartDate,
            "EndDate": req.body.EndDate,
            "Place": req.body.Place
        });
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