require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const { dateEnable } = require("./controllers/dateController");
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/")
  .then(() => console.log("Database is connected..."))
  .catch((err) => console.log(err));


app.get("/dateEnable" , dateEnable);

// production script
app.use(express.static("./frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});


app.listen(port, () => {
  console.log(`Server is running on post ${port}`);
});