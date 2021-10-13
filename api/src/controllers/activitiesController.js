const { Activities, Countries } = require("../db");
const axios = require('axios');
var Sequelize = require("sequelize");




async function getActivities(req, res, next) {

    try {
        Activities.findAll()
 .then(dbActivities => {
    //  console.log("actividades", dbActivities);
         res.send(dbActivities)
 }).catch(err => console.log(err))
        
    } catch (error) {
        next(error)
    }
    
}


 
 async function addActivities(req, res, next) {

    try {
        const { name, difficulty, duration, season, countries } = req.body;
        let newActivity = {
            name,
            difficulty,
            duration,
            season
        }
        Activities.create(newActivity)
        .then(activity => {
            activity.addCountries(countries)
            res.json(activity)
        })

    // const newActivity = await Activities.create({
    //     name,
    //     difficulty,
    //     duration,
    //     season
    // })

    // countries.forEach(element=>{
    //     newActivity.addCountries(element)
    // })
    // newActivity.addCountries(countries)

    // res.send(newActivity)
        
    } catch (error) {
        next(error)
    }
    
}

module.exports = {
    getActivities,
    addActivities
}