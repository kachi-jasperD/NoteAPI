const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 100,
    },

    content: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 5000,
    },

    category: {
      type: String,
      enum: ["Personal", "Work", "Study", "Ideas", "Other"],
      default: "Personal",
    },

    tags: {
      type: [String],
      default: [],
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    isPinned: {
      type: Boolean,
      default: false,
    },

    reminderDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
