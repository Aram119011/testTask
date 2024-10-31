
const express = require('express');
const router = express.Router();
const { generateAndSaveCombinations } = require('../controllers/combinationController');

router.post('/generate', generateAndSaveCombinations);

module.exports = router;
