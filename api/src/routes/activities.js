const { Router } = require('express');
const { getActivities, addActivities } = require('../controllers/activitiesController');
const router = Router();


router.get("/", getActivities);
router.post("/add", addActivities);


module.exports = router;