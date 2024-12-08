import Booking from "../models/booking.model.js";

export const addBooking = async (req, res) => {
  try {
    const { numbers, price, total, reserverName, approvedBy,date,status } = req.body;

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

    // Send a success response
    res
      .status(201)
      .json({ message: "Booking created successfully", booking: newBooking , success: true });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating booking", error: error.message, success: false});
  }
};

export const fetchBookings = async (req, res) => {
    try {
      // Extract date, price, and status from the query parameters
      const { date, price, status } = req.query;
  
      // Convert date to a valid Date object if it's provided
      const startDate = date ? new Date(date) : null;
  
      // Build the query object
      const query = {};
      if (startDate) {
        query.date = { $gte: startDate }; // You can adjust this if you want a specific date range or match exactly
      }
      if (price) {
        query.price = price;
      }
      if (status) {
        query.status = status; // Filter by the provided status (pending, approved, etc.)
      }
  
      // Fetch bookings based on the query with status included
      const bookings = await Booking.find(query).select('numbers status');
  
      // Initialize arrays for different statuses
      const groupedNumbers = {
        pending: [],
        approved: [],
        rejected: [],
        cancelled: [],
      };
  
      // Group the numbers by their status
      bookings.forEach(booking => {
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
  
      // Return the grouped numbers as a JSON response
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

  export const fetchBookingDetails = async (req, res) => {
    try {
      const { date, price } = req.query;
  
      // Validate query parameters
      if (!date || !price) {
        return res.status(400).json({ message: "Date and price are required." });
      }
  
      // Convert the date query into a valid Date object
      const formattedDate = new Date(date);
  
      // Ensure the date is valid
      if (isNaN(formattedDate.getTime())) {
        return res.status(400).json({ message: "Invalid date format." });
      }
  
      // Base query for fetching bookings
      const query = {
        date: formattedDate,
        price: price,
      };
  
      // Add additional filtering for admin role
      if (req.user.role === 'admin') {
        query['approvedBy'] = req.user._id;
      }
  
      // Fetch bookings based on the constructed query, and populate the 'name' field from the related User model
      const bookings = await Booking.find(query).populate('approvedBy', 'name');
  
      // Return the bookings
      return res.status(200).json(bookings);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "An error occurred while fetching booking details." });
    }
  };

  export const updateBookingStatus = async (req, res) => {
    try {
      const { bookingId, status } = req.body;
  
      // Validate the status
      if (!status || !['approved', 'rejected', 'cancelled'].includes(status)) {
        return res.status(400).json({ message: "Invalid status." });
      }
  
      // Find the booking by ID
      const booking = await Booking.findById(bookingId);
  
      // Check if the booking exists
      if (!booking) {
        return res.status(404).json({ message: "Booking not found." });
      }
  
      // Update the status of the booking
      booking.status = status;
  
      // Save the updated booking
      await booking.save();
  
      // Return a success response
      return res.status(200).json({ message: "Booking status updated successfully." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "An error occurred while updating booking status." });
    }
  };
   