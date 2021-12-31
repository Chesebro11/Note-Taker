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

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false:
    } 
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function getId (id , note) {
    const result = note.filter(note => note.id === id) [0];
    return result;
}

module.exports = {
    newNote,
    validateNote,
    getId
}