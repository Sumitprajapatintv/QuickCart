import mongoose from "mongoose";
import IUser from "../interfaces/IUser";
const User = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  password: {
    type: String
  },
  confirmPassword: {
    type: String
  },
  age: {
    type: String
  },
  gender: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }

}, { timestamps: true },);

export default mongoose.model<IUser & mongoose.Document>('User', User);
