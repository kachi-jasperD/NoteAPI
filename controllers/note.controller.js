const Joi = require("joi");

// Import model
const Note = require("../models/note.model.js");

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

// Get all Notes
const getAllNotes = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const sort = req.query.sort || "-createdAt";
  const search = req.query.search || req.query.q;

  const skip = (page - 1) * limit;

  try {
    let query = {};

    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
        ],
      };
    }

    const notes = await Note.find(query).sort(sort).skip(skip).limit(limit);

    const totalNotes = await Note.countDocuments(query);

    res.status(200).json({
      message: "Notes retrieved successfully",
      data: notes,
      currentPage: page,
      totalPages: Math.ceil(totalNotes / limit),
      totalNotes,
    });
  } catch (error) {
    next(error);
  }
};

// Update an existing note by ID
const updateNoteById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Define Joi Validation Schema matching your field rules
    const schema = Joi.object({
      title: Joi.string().trim().max(100).optional(),
      content: Joi.string().trim().max(2000).optional(),
      category: Joi.string()
        .trim()
        .valid("work", "personal", "ideas")
        .optional(),
    }).min(1); // Requires at least one field to be sent for an update

    // Execute Joi Validation
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.details.map((err) => err.message),
      });
    }

    // Update note in database
    // { new: true } returns the updated document instead of the old one
    // { runValidators: true } enforces any extra Mongoose schema constraints
    const note = await Note.findByIdAndUpdate(id, value, {
      new: true,
      runValidators: true,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: note,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a note by ID
const deleteNoteById = async (req, res) => {
  try {
    const noteId = req.params.id; // This grabs '6a52a41022043c931d56cabf'
    const deletedNote = await Note.findByIdAndDelete(noteId);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNote,
  getNoteById,
  getAllNotes,
  updateNoteById,
  deleteNoteById,
};
