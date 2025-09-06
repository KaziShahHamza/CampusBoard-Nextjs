import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.ts"; // ✅ import test file

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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
