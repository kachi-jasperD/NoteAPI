const express = require("express");
const router = express.Router();

// Import controller functions
const { createNote, getNoteById } = require("../controllers/controller.js");

// Import validation schema
const validateTodo = require("../middlewares/validator.js");
const { createNoteSchema, objectIdSchema } = require("../schema/schema.js");

// Create a new note
router.post(
  "/",
  validateTodo(createNoteSchema),
  createNote
);

// Get a single note by ID
router.get(
  "/:id",
  validateTodo(objectIdSchema, "params"),
  getNoteById
);

module.exports = router;
