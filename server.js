require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
const path = require("path");
import user from "./routes/user.route.js";
import booking from "./routes/booking.route.js";
import dateEnable from "./routes/date.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", user);
app.use("/api/booking", booking);
app.use("/api/dateEnable", dateEnable);

mongoose
  .connect("mongodb+srv://user1:h6BlnkE5N9Boksmt@cluster0.i9rx6cp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Database is connected..."))
  .catch((err) => console.log(err));

app.use(express.static("./frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on post ${port}`);
});
 