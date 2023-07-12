import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "password is required"],
  },
});

//Export the model
export default mongoose.model("User", userSchema);
