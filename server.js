require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const { fetchDatesEnable } = require("./controllers/dateController");
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

// Mongoose connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://user1:user@cluster0.mmap8.mongodb.net/testDataDev")
  .then(() => console.log("Database is connected..."))
  .catch((err) => console.log("Database connection error: ", err));

// Route for fetching date enable status
app.get("/dateEnable", async (req, res) => {
  try {
    await fetchDatesEnable(req, res);
  } catch (err) {
    res.status(500).json({ error: "Error fetching date enable data." });
  }
});

// Static files for production
app.use(express.static("./frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// Server setup
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
