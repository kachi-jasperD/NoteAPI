const express = require("express");
const router = express.Router();

// Import all controller handlers cleanly
const noteController = require("../controllers/note.controller.js");

// Import schemas
const { createNoteSchema, updateNoteSchema, objectIdSchema } = require("../schema/note.schema.js");

// Map endpoints using the controller object safely
router.post("/", noteController.createNote);
router.get("/:id", noteController.getNoteById);
router.put("/:id", noteController.updateNoteById);
router.delete("/:id", noteController.deleteNoteById);

module.exports = router;

