import * as joi from "joi";

export const userSchema = joi.object().keys({
  firstName: joi.string().min(2).required(),
  lastName: joi.string().min(2).required(),
  age: joi.number().positive().required(),
  sex: joi.string().pattern(/(female|male)\b/, 'sex validation'),
  pregnancy: joi.boolean().required(),
  birthdate: joi.date().less('now').required(),
  phoneNumber: joi.string().required(),
});
