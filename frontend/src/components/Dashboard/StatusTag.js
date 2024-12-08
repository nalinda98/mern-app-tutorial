import React from "react";
import { Tag } from "antd";

const StatusTag = (status) => {

    // console.log(status)
  return (
    <div>
      {
        status.status === "Pending" ? <Tag color="orange">Pending</Tag> :
        status.status === "Check-In" ? <Tag color="green">Checked In</Tag> :
        status.status === "Check-Out" ? <Tag color="blue">Checked Out</Tag> :
        status.status === "Cancelled" ? <Tag color="red">Cancelled</Tag> :
        status.status === "Closed" ? <Tag color="green">Closed</Tag> :
        status.status === "Paid" ? <Tag color="green">Paid</Tag> : 
        status.status === "Active" ? <Tag color="green">Active</Tag> :
        status.status === "Inactive" ? <Tag color="red">Inactive</Tag> :
        null
      }
    </div>
  );
};

export default StatusTag;
