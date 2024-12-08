require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
const path = require("path");
const bodyParser = require("body-parser");
const { authenticateToken } = require("./middleware/authenticateToken");
const { isSuperAdmin } = require("./middleware/isAdmin");
const { dateEnable, fetchDatesEnable } = require("./controllers/dateController");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database is connected..."))
  .catch((err) => console.log(err));

app.post("/", authenticateToken, isSuperAdmin , dateEnable);
app.get("/", fetchDatesEnable);

app.use(express.static("./frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on post ${port}`);
});
 