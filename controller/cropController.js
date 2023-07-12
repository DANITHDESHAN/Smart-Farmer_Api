import cropModel from "../models/cropModel.js";

//function for the add new crop
export const addCropController = async (req, res) => {
  try {
    const existingCrop = await cropModel.findOne({
      cropName: req.body.cropName,
    });
    if (existingCrop) {
      return res
        .status(400)
        .json({ message: "crop already exisit in the system", success: false });
    }
    const newCrop = new cropModel(req.body);
    console.log(newCrop);
    await newCrop.save();

    res.status(201).send({ message: "crop added Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

export const getAllcropController = async (rwq, res) => {
  try {
  } catch (error) {}
};
