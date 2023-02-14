const router = require('express').Router();

const { maximumAndMinimumInMatrix } = require('../controllers/maxMin');
router.get('/', maximumAndMinimumInMatrix);

module.exports = router;