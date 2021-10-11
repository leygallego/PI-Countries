const { Router } = require('express');
const { getCountries, getCountryByID } = require('../controllers/countryController');
const router = Router();

router.get("/", getCountries)
router.get("/one/:id", getCountryByID)








module.exports = router;