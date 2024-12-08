const mongoose = require("mongoose");
const User = require("./user.model");

const dateEnableSchema = new mongoose.Schema({
  prices: [Number],
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },

  selectedDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DateEnable = mongoose.model("DateEnable", dateEnableSchema);

module.exports = DateEnable;
