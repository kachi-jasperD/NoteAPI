const Joi = require("joi");
const createNoteSchema = Joi.object({
    title: Joi.string().trim().min(3).max(100).required(),
    content: Joi.string().trim().min(10).max(5000).required(),
    category: Joi.string().trim().max(50).optional(),
    tags: Joi.array().items(Joi.string().trim().min(2).max(30)).max(10).unique().optional()
}).options({ abortEarly: false, stripUnknown: true });

const updateNoteSchema = Joi.object({
    title: Joi.string().trim().min(3).max(100).optional(),
    content: Joi.string().trim().min(10).max(5000).optional(),
    category: Joi.string().trim().max(50).optional(),
    tags: Joi.array().items(Joi.string().trim().min(2).max(30)).max(10).unique().optional()
}).min(1).options({ abortEarly: false, stripUnknown: true });

const objectIdSchema = Joi.object({
    id: Joi.string().hex().length(24).required().messages({
        "string.length": "Invalid note ID",
        "string.hex": "Invalid note ID",
        "any.required": "Note ID is required"
    })
});

module.exports = { createNoteSchema, updateNoteSchema, objectIdSchema };
