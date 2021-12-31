const fs = require('fs');
const path = require('path');

function newNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function validateNote(notes) {
    if (!notes.title || typeof notes.title !== 'string') {
        return false
    } 
    if (!notes.text || typeof notes.text !== 'string') {
        return false;
    }
    return true;
}

function getId (id , notes) {
    const result = notes.filter(note => note.id === id) [0];
    return result;
}

module.exports = {
    newNote,
    validateNote,
    getId
}