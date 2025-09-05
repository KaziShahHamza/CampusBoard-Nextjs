import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { testUsers } from "./testData"; // ✅ import test file

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB
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

connectDB();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello from Express + TypeScript!");
});

// ✅ Test route to check imported file
app.get("/users", (_req, res) => {
  res.json(testUsers);
});

app
  .listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("❌ Server start error:", err);
  });
