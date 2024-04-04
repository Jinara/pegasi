import * as mongodb from "mongodb";

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  sex: "female" | "male";
  pregnancy: boolean;
  birthdate: Date;
  phoneNumber: string;

  _id?: mongodb.ObjectId;
}