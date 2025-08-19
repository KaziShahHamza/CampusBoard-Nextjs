import express from "express";
import connectDB from "./utils/db";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello from Express + TypeScript!");
});

app
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("❌ Server start error:", err);
  });
