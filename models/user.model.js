import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    password: {
      type: String,

      validate: {
        validator: function (value) {
          return value.length >= 6;
        },
        message: () => "Password must be at least six characters long",
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: validator.isEmail,
        message: (props) => `${props.value} is not a valid email`,
      },
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    dueDate:{
      type:Date,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "super-admin", "staff"],
    },
    
    contact:{
      type:String,
      // required:[true,"Contact is required"]
    },
    otp: {
      type: String,
    },
    phone: {
      type: String,
      // required: [true, "Phone is required"],
    },
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
