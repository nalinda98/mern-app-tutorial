import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { resolve, join } from "path"; // Named import for both 'resolve' and 'join'

dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://user1:user@cluster0.mmap8.mongodb.net/testDataDev")
  .then(() => console.log("Database is connected..."))
  .catch((err) => console.log(err));

// API Routes
app.get("/dateEnable", (req, res) => {
  res.send("Hello World!");
});

// Serve static files from the 'frontend/build' directory
const staticFilePath = join(__dirname, "frontend", "build");

app.use(express.static(staticFilePath)); // Serve static assets

// Wildcard route for all other requests, fallback to index.html
app.get("*", (req, res) => {
  res.sendFile(resolve(staticFilePath, "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
