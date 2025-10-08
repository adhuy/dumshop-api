import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { getProfile } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// Auth routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route
router.get("/profile", verifyToken, getProfile);

export default router;
