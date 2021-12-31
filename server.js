// Dependencies
const fs = require('fs');
const path = require ('path');

// link routes
const apiRoutes = require('./routes/apiRoutes');
const homeRoutes = require('./routes/htmlRoutes');

// declaring express, notes array
const express = require('express');
const { notes } = require('./db/db.json');
const { resolveSoa } = require('dns');

// Server PORT
const PORT = process.env.PORT || 3001;

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Link public to server
app.use(express.static(path.join(__dirname, 'public')));

//Route prefix
app.use('/api', apiRoutes);
app.use('/', homeRoutes);

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}`);
});
