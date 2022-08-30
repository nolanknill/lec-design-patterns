const express = require("express");
const router = express.Router();
const contestantController = require('../controllers/contestantController');

router.get("/", contestantController.getContestants);
router.get("/:contestantId", contestantController.getContestant);

module.exports = router;

/*

const crypto = require("crypto");

router.post("/", (req, res) => {
  // Make a new note
  const newNote = {
    id: crypto.randomUUID(),
    title: req.body.title,
    content: req.body.content,
  };

  // 1. Read the current notes array
  // 2. Add to the notes array
  // 3. Write the entire new notes array to the file
  const notes = readNotes();
  notes.push(newNote);
  fs.writeFileSync("./data/notes.json", JSON.stringify(notes));

  res.status(201).json(newNote);
});


router.delete("/:noteId", (req, res) => {
  // TODO: ACTUALLY DELETE THE NOTE

  // Steps:
  // 1. Read from the file
  // 2. Find the note with that id
  // 3. Delete it
  // 4. Write the whole array back to the file

  //Respond with a message that the note has been deleted
  res.send("We have deleted note number " + req.params.noteId);
});
*/

