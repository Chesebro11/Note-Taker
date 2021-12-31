const router = require('express').Router();
const path = require('path');


// Route for home
router.get('/', (req, res) => {

});

// Route for note page
router.get('/notes', (req, res) => {

});

// Redirect Route
router.get('*', (req, res) => {

});

module.exports = router;