import express from "express";
import User from "../models/user.model.js";
import {
  getUsers,
  register,
  registerG,
  login,
  logout,
  token,
  getUsersDetailsForMembership,
  getUsersEmail,
  updateMemberDetails ,
  getUserById,
  registerNewMember
} from "../controllers/userController.js";
import jwt from "jsonwebtoken";
import { authenticateToken } from "../middleware/authenticateToken.js";
import { isAdmin, isSuperAdmin } from "../middleware/isAdmin.js";

const router = express.Router();

function generateOTP() {
  const min = 1000; // Minimum 4-digit number
  const max = 9999; // Maximum 4-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

router.get("/getUsers", async (req, res) => {
  getUsers(req, res);
});

router.get("/getUser/:id", async (req, res) => {
  getUserById(req, res);
});

router.get("/getUsersDetails", async (req, res) => {
  getUsersDetailsForMembership(req, res);
});

router.put("/updateMemberDetails", authenticateToken, isSuperAdmin ,async (req, res) => {
  updateMemberDetails(req, res);
});

router.post("/registerNewMember", async (req,res)=>{
  registerNewMember(req,res)
})

router.get("/email", async (req, res) => {
  getUsersEmail(req, res);
});

router.post("/register", async (req, res) => {
  console.log("register");
  register(req, res);
});

router.post("/googleRegister", async (req, res) => {
  registerG(req, res);
});

router.post("/login", async (req, res) => {
  login(req, res);
});

router.get("/logout", authenticateToken, async (req, res) => {
  logout(req, res);
});

router.post("/refresh", async (req, res) => {
  token(req, res);
});

router.delete("/delete/:id", authenticateToken, isAdmin, async (req, res) => {
  try {
    const removedUser = await User.findByIdAndDelete({ _id: req.params.id });

    res.status(200).json(removedUser);
  } catch (err) {
    res.status(501).json({ message: err.message });
  }
});

router.post("/verify", async (req, res) => {
  try {
    const token = req.header("Authorization").split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded) {
      return res.status(200).json({ message: "User is authenticated" });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(401).json({ error: "Please authenticate." });
  }
});
export default router;
