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
                            return Countries.create({
                                id: e.cca3,
                                name: e.name.common,
                                flag: e.flags[1],
                                continent: e.region,
                                capital: JSON.stringify(e.capital),
                                subregion: e.subregion,
                                area: e.area,
                                population: e.population
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

module.exports = {
    getCountries
}

