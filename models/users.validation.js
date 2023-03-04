const Joi = require("joi");

const userValidateSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ru"] },
    })
    .required(),
  password: Joi.string().min(6).max(30).required(),
});

module.exports = userValidateSchema;
