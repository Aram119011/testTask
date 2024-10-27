
// const express = require('express');
// const router = express.Router();
// const { generateCombinations } = require('../controllers/combinationController1');
//
// router.post('/generate', generateCombinations);
//
// module.exports = router;


// routes/combinationRoutes.js
const express = require('express');
const router = express.Router();
const { generateAndSaveCombinations } = require('../controllers/combinationController');

router.post('/generate', generateAndSaveCombinations);

module.exports = router;
