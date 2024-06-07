import mongoose from "mongoose";

export default interface IUser {
  shippingInfo: object,
  user: object,
  orderItems: Array<string>,
  itemsPrice: Number,
  taxPrice: Number,
  shippingPrice: Number,
  totalPrice: Number,
  stock: String,
  paidAt: Date,
  deliveredAt: Date,
  orderStatus: String,
}