import badmintonEvent from "../models/badmintonEvent.model.js";
import CricketEvent from "../models/cricketEvent.model.js";
import PoolEvent from "../models/poolEvent.model.js";

export const validateBooking = async (type, booking) => {
  try {
    const now = new Date();
    let valid = false;
    if (type === "Pool") {
      // console.log(booking);
      if (
        booking.endTime < now &&
        booking.usageStatus == "Pending" &&
        booking.usageStatus != "Cancelled"
      ) {
        valid = false;
        await PoolEvent.findByIdAndUpdate(booking._id, {
          usageStatus: "Cancelled",
        });
      } else {
        valid = true;
      }
    } else if (type === "Badminton") {
        // console.log(booking)
      if (booking.usageStatus == "Check-In" && booking.endTime < now) {
        await badmintonEvent.findByIdAndUpdate(booking._id, {
          usageStatus: "Check-Out",
        });
        valid = true;
      } else if (booking.usageStatus == "Pending" && booking.endTime < now) {
        await badmintonEvent.findByIdAndUpdate(booking._id, {
          usageStatus: "Cancelled",
        });
        valid = false;
      } else {
        valid = true;
      }
    } else if (type === "Cricket") {
      if (booking.usageStatus == "Check-In" && booking.endTime < now) {
        // await CricketEvent.findByIdAndUpdate(booking._id, {
        //   usageStatus: "Check-Out",
        // });
        // valid = true;
      } else if (booking.usageStatus == "Pending" && booking.endTime < now) {
        await CricketEvent.findByIdAndUpdate(booking._id, {
          usageStatus: "Cancelled",
          active: false,
        });
        valid = false;
      } else {
        valid = true;
      }
    }
    return valid;
  } catch (err) {
    console.log(err);
    return false;
  }
};
