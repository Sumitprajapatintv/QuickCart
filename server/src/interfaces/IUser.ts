import mongoose from "mongoose";

export default interface IUser {
  _id: String,
  name: String
  email: String,
  phoneNumber: String,
  password: String,
  confirmPassword: String,
  gender: String,
}