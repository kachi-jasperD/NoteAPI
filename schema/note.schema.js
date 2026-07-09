const Joi = require("joi");

// create schema validation
const createNoteSchema = Joi.object({
    title: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .required()
        .messages({
            "string.empty": "Title is required",
            "string.min": "Title must be at least 3 characters",
            "string.max": "Title cannot exceed 100 characters",
            "any.required": "Title is required",
        }),

    content: Joi.string()
        .trim()
        .min(10)
        .max(5000)
        .required()
        .messages({
            "string.empty": "Content is required",
            "string.min": "Content must be at least 10 characters",
            "string.max": "Content cannot exceed 5000 characters",
        }),

    category: Joi.string()
        .trim()
        .max(50)
        .optional()
        .messages({
            "string.max": "Category cannot exceed 50 characters",
        }),

    tags: Joi.array()
        .items(
            Joi.string()
                .trim()
                .min(2)
                .max(30)
        )
        .max(10)
        .unique()
        .optional(),
}).options({
    abortEarly: false,
    stripUnknown: true,
});

const getNoteByIdSchema = Joi.object({
    id: Joi.string()
        .hex()
        .length(24)
        .required()
        .messages({
            "string.length": "Invalid note ID",
            "string.hex": "Invalid note ID",
            "any.required": "Note ID is required",
        }),
});

// export the schema
module.exports = {
    createNoteSchema,
    getNoteByIdSchema,
};
