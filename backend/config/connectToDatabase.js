import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB successfully...");
  } catch (error) {
    console.log("❌ Failed to connect to MongoDB", error.message);
  }
};

export default connectDb;
