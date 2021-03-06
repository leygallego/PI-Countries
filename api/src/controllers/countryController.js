const { Countries, Activities, Op } = require('../db');
const axios = require('axios');
var Sequelize = require("sequelize");



 function getCountries(req, res, next) {

    try {

        Countries.findAll()
        .then(paises=>{
            paises.length > 0 ? res.json(paises)
            :
            axios.get("https://restcountries.com/v3/all")
            .then(pais=>{
                return Promise.all(
                    pais.data.map(e=>{
                            
                            return Countries.findOrCreate({
                                where: {
                                    id: e.cca3,
                                    name: e.name.common,
                                    flag: e.flags[1],
                                    continent: e.region,
                                    capital: e.capital  === undefined ? "Sin Capital":  e.capital[0],
                                    subregion: e.subregion === undefined ? "Sin Región" : e.subregion,
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
            // console.log("información", countryInfo);
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
       let dbCountries = await Countries.findAll({
           include:{
                model: Activities
           }
       })
       .then(dbPaises =>{
           res.send(dbPaises)
       })
    } catch (error) {
        
    }
    
}

async function addCountry(req, res, next) {
    
            //destructuro los items del país que voy a crear que vienen por body
        const { id, name, flag, continent, capital, subregion, area, population } = req.body;
        let newCountry = {
            id,
            name,
            flag,
            continent,
            capital,
            subregion,
            area,
            population
        }
        Countries.create(newCountry)
        .then(country=>{
            res.send(country)
        })
        .catch((err)=>{
            next(err)
        })

    
        
}

async function searchCountry(req, res, next){
    try {
        const { name } = req.query;
        let pais = await Countries.findAll({
            where: {
                [Sequelize.Op.or]: [
                    {
                        name: {
                            [Sequelize.Op.iLike]: `%${name}%`,
                        }
                    }
                ]
            },
            include:{
                model: Activities
           }
        })
        res.send(pais)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    getCountries,
    getCountryByID,
    countryFromDB,
    searchCountry,
    addCountry
}

