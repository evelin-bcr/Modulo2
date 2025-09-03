import mongoose from "mongoose";

// new es un constructor
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    required: true,
  },
});

export const userModel = mongoose.model("users", userSchema);



