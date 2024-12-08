const DateEnable = require("./models/date.model");

const sampleExport = async (req, res) => {
  try {
    const dates = await DateEnable.find().populate("createdBy", "name");
    res.status(200).json({ dates, success: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sampleExport;
