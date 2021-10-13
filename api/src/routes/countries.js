const { Router } = require('express');
const { getCountries, getCountryByID, countryFromDB } = require('../controllers/countryController');
const router = Router();

router.get("/", getCountries)
router.get("/one/:id", getCountryByID)
router.get("/db", countryFromDB)








module.exports = router;