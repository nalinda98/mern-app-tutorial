const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
      unique: true,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      index: { expires: "24h" },
    },
  },
  { timestamps: true }
);

const RefreshToken = mongoose.model("Tokens", tokenSchema);

module.exports = RefreshToken;
