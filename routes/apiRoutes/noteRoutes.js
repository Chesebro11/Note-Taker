const { Router } = require('express');

//Dependencies
const fs = require("fs");
const path = require('path');

//import notes array
const { notes } = require('../../db/db.json')

//import functions
const { newNote, validateNote, getId } = require('../../lib/notes');

Router.get('/notes', (req, res) => {

})

Router.post('/notes', (req, res) => {

})

Router.delete('/notes/:id', (req, res) => {

})