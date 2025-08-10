import Joi from "joi";

export const registerUserSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        'string.base': 'Username should be a string',
        'string.min': 'Username should have at least {#limit} characters',
        'string.max': 'Username should have at most {#limit} characters',
        'any.required': 'Username is required',
    }),
    email: Joi.string().email().required().messages({
        'string.base': 'Email should be a string',
        'string.email': 'The string is not a valid e-mail',
        'any.required': 'Username is required',
    }),
    password: Joi.string().required(),
});

export const loginUserSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.base': 'Email should be a string',
        'string.email': 'The string is not a valid e-mail',
        'any.required': 'Username is required',
    }),
    password: Joi.string().required(),
});