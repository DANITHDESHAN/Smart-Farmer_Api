import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var farmerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "first name is required"],
  },
  lastName: {
    type: String,
    required: [true, "last name is required"],
  },
  province: {
    type: String,
    required: [true, "province is required"],
  },
  district: {
    type: String,
    required: [true, "district is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  mobile: {
    type: String,
    required: [true, "mobile is required"],
  },
  userName: {
    type: String,
    required: [true, "userName is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

//Export the model
export default mongoose.model("Farmer", farmerSchema);
