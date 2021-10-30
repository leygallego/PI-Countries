const { Router } = require('express');
const { getCountries, getCountryByID, countryFromDB, searchCountry, addCountry } = require('../controllers/countryController');
const router = Router();

router.get("/", getCountries)
router.get("/one/:id", getCountryByID)
router.get("/db", countryFromDB)
router.get("/search", searchCountry)
router.post("/addcountry", addCountry)








module.exports = router;