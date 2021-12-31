const path = require('path');
const { Router } = require('express');

// Route for home
Router.get('/', (req, res) => {

});

// Route for note page
Router.get('/notes', (req, res) => {

});

// Redirect Route
Router.get('*', (req, res) => {

});

module.exports = Router;