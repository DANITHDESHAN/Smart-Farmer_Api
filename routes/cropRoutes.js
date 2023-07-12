import express from "express";
import { addCropController } from "../controller/cropController.js";

const router = express.Router();

//add crop || POST
router.post("/addCrop", addCropController);

//get all crop || get
router.post("/getCrop", addCropController);

export default router;
