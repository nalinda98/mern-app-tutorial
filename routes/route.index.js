import express from "express";
import dateEnable from "./date.route.js";

const router = express.Router();

router.use("/date", dateEnable);

export default router;