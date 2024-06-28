import mongoose from "mongoose";
  const Cart = new mongoose.Schema({
  product:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  user: {  
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})
