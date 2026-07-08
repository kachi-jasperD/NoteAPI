const Joi = require("joi");

// Import model
const Note = require("../models/model.js");

// Create a new note
const createNote = async (req, res, next) => {
  try {
    const note = await Note.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single note by ID
const getNoteById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: note,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNote,
  getNoteById,
};
