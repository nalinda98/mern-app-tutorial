import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*", // Replace * with specific allowed domains in production
    methods: "GET,POST",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
const __filename = fileURLToPath(import.meta.url);
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
const port = process.env.PORT || 8081; // Dynamic port for Azure
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
