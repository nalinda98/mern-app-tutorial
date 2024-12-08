import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://user1:user@cluster0.mmap8.mongodb.net/testDataDev")
  .then(() => console.log("Database is connected..."))
  .catch((err) => console.log(err));

app.get("/dateEnable", (req, res) => {
  res.send("Hello World!");
});

// Production script
app.use(express.static("./frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve("frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
