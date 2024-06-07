import mongoose from "mongoose";

export default interface IUser {
  name: String
  price: String,
  description: String,
  ratings: String,
  images: Array<string>,
  category: String,
  seller: String,
  stock: String,
  numOfReviews: String,
  reviews: Array<string>,
  user: Array<string>
}