import express from "express";
import {
  loginController,
  registerController,
  authController,
} from "../controller/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

//register || POST

router.post("/register", registerController);

//login || POST
router.post("/login", loginController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

export default router;
