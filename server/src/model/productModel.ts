import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  productType: {
    type: String,
  },
  prodcutPrice: {
    type: Number
  },
  user: {
    _id: {
      type: mongoose.Types.ObjectId,
      // required: true,
    },
    name: {
      type: String,
      // required: true,
    },
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
})