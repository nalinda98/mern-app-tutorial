import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect("mongodb+srv://user1:user@cluster0.mmap8.mongodb.net/testDataDev")
  .then(() => console.log("Database is connected..."))
  .catch((err) => console.log(err));

// Define MongoDB schema
const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
});

// Create MongoDB model
const User = mongoose.model("User", userSchema);

// Routes
app.get("/get-users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Error fetching users" });
  }
});

app.post("/create", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      lastName: req.body.lastName,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Error creating user" });
  }
});

// Serve static files
const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "frontend", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something broke!", error: err.message });
});

// Start the server
app.listen("8081", () => {
  console.log(`Server is running on port ${port}`);
});
