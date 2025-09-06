import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    console.log("🔍 Connecting to DB:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ MongoDB connected");
  } catch (error: any) {
    console.error("❌ DB connection error:", error.message);
    console.error("📛 Full Error:", error);
    process.exit(1);
  }
};

export default connectDB;
