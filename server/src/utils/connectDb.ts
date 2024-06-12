import mongoose from "mongoose";

const connectDB = async () => {
  if (process.env.MONGO_URI !== undefined) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        // useUnifiedTopology: true,
        // useNewUrlParser: true,
        // useCreateIndex: true,
      });
      console.log(`MongoDB Connected`);
    } catch (error) {

      console.error(`Error: ${error}`);
      process.exit(1);
    }
  }
};

export default connectDB;