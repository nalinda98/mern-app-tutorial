require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 3001;
const DateEnable = require("./models/date.model");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://user1:user@cluster0.mmap8.mongodb.net/testDataDev"
  )
  .then(() => console.log("Database is connected..."))
  .catch((err) => console.log(err));

app.get("/dateEnable", async (req, res) => {
  try {
    const dates = await DateEnable.find().populate("createdBy", "name");
    res.status(200).json({ dates, success: true });
  } catch (error) {
    console.error("Error fetching dates:", error);
    res.status(500).json({ message: "error", success: false });
  }
});

// production script
app.use(express.static("./frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on post ${port}`);
});
