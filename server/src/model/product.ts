import mongoose from "mongoose";
import IProduct from '../interfaces/IProduct'

const Product = new mongoose.Schema({
  productName: {
    type: String,
    trim: true,
  },
  price: {
    value: {type:String},
    currency: {type:String}
  },
  description: {
    type: String,
  },
  ratings: {
    stars:{type:Number},
    reviewsCount:{type:Number}
  },
  images: [
    {
      type: String
    }
  ],
  category: {
    type: String,
    // required: [true, "Please enter product category"],
    enum: {
      values: [
        'Electronics',
        'Mobile Phones',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home'
      ],
      message: "Please select correct category"
    }
  },
  seller: {
    type: String,
    // required: [true, "Please enter product seller"]
  },
  stock: {
    type: Number,
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      rating: {
        type: String,
        // required: true
      },
      comment: {
        type: String,
        // required: true
      }
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId
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

export default mongoose.model<IProduct & mongoose.Document>('Product', Product);
