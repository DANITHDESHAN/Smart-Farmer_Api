import express from "express";
import {
  getAllFarmerController,
  loginFarmercontroller,
  registerFarmerController,
} from "../controller/farmerController.js";

const router = express.Router();

//register farmer || POST
router.post("/registerFarmer", registerFarmerController);

//register farmer || POST
router.post("/loginFarmer", loginFarmercontroller);

//getAll Farmers farmer || GET
router.get("/getAllFarmer", getAllFarmerController);

export default router;
