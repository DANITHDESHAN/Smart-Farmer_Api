import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var cropSchema = mongoose.Schema({
  cropName: {
    type: String,
    required: [true, "crop name is required"],
  },
  cropType: {
    type: String,
    required: [true, "crop type is required"],
  },
  duration: {
    type: String,
    required: [true, "duration is required"],
  },
  guide: {
    type: String,
    required: [true, "guide is required"],
  },
});

//Export the model
export default mongoose.model("crop", cropSchema);
