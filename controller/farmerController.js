import bcrypt from "bcryptjs";
import farmerModel from "../models/farmerModel.js";

//farmer register function
export const registerFarmerController = async (req, res) => {
  try {
    const existingUser = await farmerModel.findOne({
      userName: req.body.userName,
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "farmer already exisit in system", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newFarmer = new farmerModel(req.body);
    console.log(newFarmer);
    await newFarmer.save();

    res
      .status(201)
      .send({ message: "Farmer Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};
//farmer login function.this function for flutter app login
export const loginFarmercontroller = async (req, res) => {
  try {
    const farmer = await farmerModel.findOne({ userName: req.body.userName });
    if (!farmer) {
      return res
        .status(404)
        .send({ message: "farmer not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, farmer.password);
    if (!isMatch) {
      return res
        .status(404)
        .send({ message: "Invlid UserName or Password", success: false });
    }
    res.status(200).send({ message: " Farmer Login Success", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
};
//fetch all farmers using database
export const getAllFarmerController = async (req, res) => {
  try {
    console.log("hii");
    const farmers = await farmerModel.find({});
    res.status(200).send({
      success: true,
      message: "farmers data list",
      data: farmers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching farmers",
      error,
    });
  }
};
