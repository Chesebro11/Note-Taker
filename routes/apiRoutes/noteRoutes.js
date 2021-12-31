const router = require('express').Router();

//Dependencies
const fs = require("fs");
const path = require('path');

//import notes array
const { notes } = require('../../db/db.json');

//import functions
const { newNote, validateNote, getId } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send('There was an error creating your note, double check and try again.')
    } else {
        const note = newNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const destroy = getId(req.params.id, notes)
    const index = notes.indexOf(destroy);
    if (index > 1) {
        notes.splice(index, 1)
        fs.writeFile(
            path.resolve(__dirname, "../../db/db.json"),
            JSON.stringify({ notes }, null),
            (error) => {
                if (error) console.log(error);
                res.json(notes);
            }
        )
    }
})

module.exports = router;