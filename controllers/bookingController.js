const Booking = require("../models/booking.model.js");

const addBooking = async (req, res) => {
  try {
    const { numbers, price, total, reserverName, approvedBy, date, status } = req.body;

    const newBooking = new Booking({
      numbers,
      price,
      total,
      reserverName,
      approvedBy,
      date,
      status,
    });

    // Save the new booking to the database
    await newBooking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating booking",
      error: error.message,
      success: false,
    });
  }
};

const fetchBookings = async (req, res) => {
  try {
    const { date, price, status } = req.query;

    const startDate = date ? new Date(date) : null;

    const query = {};
    if (startDate) {
      query.date = { $gte: startDate };
    }
    if (price) {
      query.price = price;
    }
    if (status) {
      query.status = status;
    }

    const bookings = await Booking.find(query).select("numbers status");

    const groupedNumbers = {
      pending: [],
      approved: [],
      rejected: [],
      cancelled: [],
    };

    bookings.forEach((booking) => {
      if (booking.status === "pending") {
        groupedNumbers.pending.push(...booking.numbers);
      } else if (booking.status === "approved") {
        groupedNumbers.approved.push(...booking.numbers);
      } else if (booking.status === "rejected") {
        groupedNumbers.rejected.push(...booking.numbers);
      } else if (booking.status === "cancelled") {
        groupedNumbers.cancelled.push(...booking.numbers);
      }
    });

    res.status(200).json({
      success: true,
      numbers: groupedNumbers,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching bookings.",
    });
  }
};

const fetchBookingDetails = async (req, res) => {
  try {
    const { date, price } = req.query;

    if (!date || !price) {
      return res.status(400).json({ message: "Date and price are required." });
    }

    const formattedDate = new Date(date);

    if (isNaN(formattedDate.getTime())) {
      return res.status(400).json({ message: "Invalid date format." });
    }

    const query = {
      date: formattedDate,
      price: price,
    };

    if (req.user.role === "admin") {
      query["approvedBy"] = req.user._id;
    }

    const bookings = await Booking.find(query).populate("approvedBy", "name");

    return res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred while fetching booking details." });
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const { bookingId, status } = req.body;

    if (!status || !["approved", "rejected", "cancelled"].includes(status)) {
      return res.status(400).json({ message: "Invalid status." });
    }

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    booking.status = status;

    await booking.save();

    return res.status(200).json({ message: "Booking status updated successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred while updating booking status." });
  }
};

module.exports = {
  addBooking,
  fetchBookings,
  fetchBookingDetails,
  updateBookingStatus,
};
