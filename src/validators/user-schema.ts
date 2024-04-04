import * as joi from "joi";

export const userSchema = joi.object().keys({
  firstName: joi.string().min(2).required(),
  lastName: joi.string().min(2).required(),
  age: joi.number().min(5).required(),
  sex: joi.string().pattern(/(female|male)\b/, "sex validation"),
  pregnancy: joi.boolean(),
  birthdate: joi.date().less("now").required(),
  //TODO: make this validation more flexible between countries
  phoneNumber: joi
    .string()
    .pattern(/^\d{7}$/, "Should have 7 numbers, no letters"),
});
