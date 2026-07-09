const express = require("express");
const router = express.Router();

// Import controller functions
const { createNote, getNoteById } = require("../controllers/note.controller.js");

// Import validation schema
const validate = require("../middlewares/validator.js");
const { createNoteSchema, objectIdSchema } = require("../schema/note.schema.js");

// Create a new note
router.post(
  "/notes",
  validate(createNoteSchema),
  createNote
);

// Get a single note by ID
router.get(
  "/notes/:id",
  validate(objectIdSchema, "params"),
  getNoteById
);

module.exports = router;
