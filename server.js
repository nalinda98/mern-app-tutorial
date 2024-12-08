require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
const path = require("path");
const bodyParser = require("body-parser");
const { fetchDatesEnable, dateEnable } = require("./controllers/dateController.js");
const { authenticateToken } = require("./middleware/authenticateToken.js");
const { isSuperAdmin, isAdmin } = require("./middleware/isAdmin.js");
const { addBooking, fetchBookings, fetchBookingDetails, updateBookingStatus } = require("./controllers/bookingController.js");
const { getUsers, getUserById, register, registerG, login, logout, token, verifyUser, getUsersDetails, updateMembersDetails } = require("./controllers/userController.js");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => console.log("Database is connected..."))
  .catch((err) => console.log(err));

app.get("/dateEnable" , fetchDatesEnable);
app.post("/dateEnable", authenticateToken, isSuperAdmin, dateEnable);
app.post("/booking", authenticateToken, isAdmin, addBooking);
app.get("/booking", fetchBookings);
app.get("/booking/details", authenticateToken, isAdmin, fetchBookingDetails);
app.post("/booking/updateStatus", authenticateToken, isAdmin, updateBookingStatus);
app.get("/user/getUsers", getUsers);
app.get("/user/getUser/:id", getUserById);
app.post ("/user/register", register);
app.post("/user/googleRegister", registerG);
app.post("/user/login", login);
app.get("/user/logout", authenticateToken, logout);
app.post("/user/refresh", token);
app.post("/user/verify", verifyUser);
app.get("/user/getUsersDetails", getUsersDetails);
app.put("/user/updateMemberDetails", authenticateToken, isAdmin, updateMembersDetails);

app.use(express.static("./frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on post ${port}`);
});
 