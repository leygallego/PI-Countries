const { Countries, Activities } = require('../db');
const axios = require('axios');
var Sequelize = require("sequelize");



async function getCountries(req, res, next) {

    try {

        Countries.findAll()
        .then(paises=>{
            paises.length > 0 ? res.json(paises)
            :
            axios.get("https://restcountries.com/v3/all")
            .then(pais=>{
                return Promise.all(
                    pais.data.map(e=>{
                            // console.log("Mapeando", e.capital[0]);
                            return Countries.findOrCreate({
                                where: {
                                    id: e.cca3,
                                    name: e.name.common,
                                    flag: e.flags[1],
                                    continent: e.region,
                                    capital: JSON.stringify(e.capital),
                                    subregion: e.subregion,
                                    area: e.area,
                                    population: e.population   
                                },
                                include:{
                                    model: Activities
                                }
                            })
                    })
                ).then(respuesta=>{
                    res.json(respuesta)
                })
            })
        }).catch(err =>{
            console.log(err);
        })

    } catch (error) {
        next(error)
    }
}


async function getCountryByID(req, res, next) {

    try {
        
        const { id } = req.params;
        let countryInfo;
        if (id) {
            countryInfo = await Countries.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Activities
                }
            })
            console.log("información", countryInfo);
            res.send(countryInfo)
        } else {
            res.send("No hay país con ese id")
        }

    } catch (error) {

        next(error)
    }
    
}

async function countryFromDB(req, res, next) {
    try {
       let dbCountries = await Countries.findAll()
       .then(dbPaises =>{
           res.send(dbPaises)
       })
    } catch (error) {
        
    }
    
}

module.exports = {
    getCountries,
    getCountryByID,
    countryFromDB
}

