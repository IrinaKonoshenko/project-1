const Joi = require("joi");

const booksValidateSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  author: Joi.string().alphanum().min(3).max(30).required(),
});

module.exports = booksValidateSchema;
