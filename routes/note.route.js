const express = require("express");
const router = express.Router();

// Import all controller handlers cleanly
const noteController = require("../controllers/note.controller.js");

// Import schemas
const {
  createNoteSchema,
  updateNoteSchema,
  objectIdSchema,
} = require("../schema/note.schema.js");

// Map endpoints using the controller object safely
router.post("/notes", noteController.createNote);
router.get("/notes/:id", noteController.getNoteById);
router.get("/notes", noteController.getAllNotes);
router.put("/notes/:id", noteController.updateNoteById);
router.delete("/notes/:id", noteController.deleteNoteById);

module.exports = router;
