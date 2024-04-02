import * as joi from 'joi';

export const userSchema = joi.object().keys({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  age: joi.number().required(),
  sex: joi.string(),
  pregnancy: joi.boolean(),
  birthdate: joi.date().required(),
  phoneNumber: joi.string().required()
});

const requiredFields: string[] = [
  "firstName",
  "lastName",
  "age",
  "sex",
  "pregnancy",
  "birthdate",
  "phoneNumber",
];

export const userSchemaJSON = {
  $jsonSchema: {
    bsonType: "object",
    required: requiredFields,
    additionalProperties: false,
    properties: {
      _id: {},
      firstName: {
        bsonType: "string",
        description: "'firstName' is required and is a string",
        minLength: 2,
      },
      lastName: {
        bsonType: "string",
        description: "'lastName' is required and is a string",
        minLength: 2,
      },
      age: {
        bsonType: "int",
        description: "'number' is required and is a number",
      },
      sex: {
        bsonType: "string",
        description: "'sex' is required and is one of 'female', or 'male'",
        enum: ["female", "male"],
      },
      pregnancy: {
        bsonType: "bool",
        description: "'pregnancy' is required and is a bool",
      },
      birthdate: {
        bsonType: "date",
        description: "'birthdate' is required and is a date",
      },
      phoneNumber: {
        bsonType: "string",
        description: "'phoneNumber' is required and is a string",
      },
    },
  },
};