let mongoose = require('mongoose');

let experienceModel = mongoose.Schema({
    Title: String,
    Organization: String,
    StartDate: String,
    EndDate: String,
    Place: String
},
{
    collection: "experience"
});
module.exports = mongoose.model('Experience', experienceModel);
