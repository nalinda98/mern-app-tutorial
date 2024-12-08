const DateEnable = require("../models/date.model.js");

const dateEnable = async (req, res) => {
  try {
    const { prices, selectedDate, createdBy } = req.body;

    const newDate = new DateEnable({
      prices,
      selectedDate,
      createdBy,
    });

    await newDate.save();

    res.status(201).json({
      message: "New Date created successfully",
      booking: newDate,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating new date",
      error: error.message,
      success: false,
    });
  }
};

const fetchDatesEnable = async (req, res) => {
  try {
    const dates = await DateEnable.find().populate('createdBy', 'name');
    res.status(200).json({ dates, success: true });
  } catch (error) {
    console.error("Error fetching dates:", error);
    res.status(500).json({ message: error, success: false });
  }
}; 

module.exports = {
  dateEnable,
  fetchDatesEnable,
};
