import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://FatimaHaider:hsfa5678@cluster0.spbkhgx.mongodb.net/"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error);
  }
};

export default connectDB;