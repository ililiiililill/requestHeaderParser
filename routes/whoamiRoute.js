const express = require('express');
const router = express.Router();
const { getWhoami } = require('../controllers/whoamiController');

// whoami route
router.route('/').get(getWhoami);

module.exports = router;
