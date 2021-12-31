const { Router } = require('express');

//Dependencies
const fs = require("fs");
const path = require('path');

//import notes array
const { notes } = require('../../db/db.json');

//import functions
const { newNote, validateNote, getId } = require('../../lib/notes');

Router.get('/notes', (req, res) => {
    res.json(notes);
})

Router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send('There was an error creating your note, double check and try again.')
    } else {
        const note = newNote(req.body, notes);
        res.json(note);
    }
});

Router.delete('/notes/:id', (req, res) => {

})