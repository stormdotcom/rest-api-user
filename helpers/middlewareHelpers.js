import Joi from 'joi';
export const registerSchema = Joi.object({
    username : Joi.string().min(3).max(15).required(),
    password : Joi.string().min(3).max(13).required(),
    email : Joi.string().email().required(),
})

export const loginSchema = Joi.object({
    password : Joi.string().min(3).max(14).required(),
    email : Joi.string().email().required(),
})


