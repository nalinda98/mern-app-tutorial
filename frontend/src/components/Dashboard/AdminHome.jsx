import React, { useEffect, useState } from "react";
import { ApiClient } from "../../utils/ApiClient";
import { Button, DatePicker, Radio, message, Table, Popconfirm } from "antd";
import dayjs from "dayjs";

const AdminHome = () => {
  const [date, setDate] = useState(dayjs());
  const [price, setPrice] = useState();
  const [availablePrices, setAvailablePrices] = useState([]);
  const [enableDates, setEnableDates] = useState([]);
  const [bookings, setBookings] = useState([]);

  // Fetch available dates and prices from the server
  const fetchDates = async () => {
    try {
      const response = await ApiClient.get("/dateEnable");
      if (response.data.success) {
        setEnableDates(response.data.dates);
        const selectedDatePrices = response.data.dates.find((d) =>
          dayjs(d.selectedDate).isSame(date, "day")
        )?.prices;
        setAvailablePrices(selectedDatePrices || [100]); // Set default prices if available
      } else {
        message.error("Failed to fetch dates.");
      }
    } catch (error) {
      message.error("Error fetching dates.");
    }
  };

  useEffect(() => {
    setBookings([]);
  }, [date]);

  const fetchBookings = async () => {
    try {
      const response = await ApiClient.get("/booking/details", {
        params: {
          date: date.format("YYYY-MM-DD"),
          price,
        },
      });

      setBookings(response.data);
    } catch (error) {
      message.error("Error fetching data.");
    }
  };

  useEffect(() => {
    date && price && fetchBookings();
  }, [date, price]);

  // Handle Date change
  const handleDateChange = (date) => {
    setPrice(null); // Reset price when date is changed
    setDate(date);
    const selectedDatePrices = enableDates.find((d) =>
      dayjs(d.selectedDate).isSame(date, "day")
    )?.prices;
    setAvailablePrices(selectedDatePrices || [100]); // Update prices based on selected date
  };

  // Handle Price change
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  // Fetch data when component mounts or when date is changed
  useEffect(() => {
    fetchDates();
  }, [date]);

  // Update booking status
  const updateBookingStatus = async (id, newStatus) => {
    try {
      const response = await ApiClient.post("/booking/updateStatus", {
        bookingId:id,
        status: newStatus,
      });

      if (response) {
        message.success(`Booking status updated to ${newStatus}`);
        fetchBookings();
      } else {
        message.error("Failed to update booking status.");
      }
    } catch (error) {
      message.error("Error updating booking status.");
    }
  };

  // Columns for the Ant Design Table
  const columns = [
    {
      title: "Numbers",
      dataIndex: "numbers",
      key: "numbers",
      render: (numbers) => numbers.join(", "), // Display numbers as comma-separated
    },
    {
      title: "Reserver Name",
      dataIndex: "reserverName",
      key: "reserverName",
    },
    {
      title: "Approved By",
      dataIndex: "approvedBy",
      key: "approvedBy",
      render: (approvedBy) => approvedBy?.name || "N/A", // Display approver's name
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status.charAt(0).toUpperCase() + status.slice(1), // Capitalize status
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => dayjs(text).format("YYYY-MM-DD HH:mm:ss"), // Format date
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) =>
        record.status === "pending" && (
          <div style={{ display: "flex", gap: "10px" }}>
            <Popconfirm
              title="Approve this booking?"
              onConfirm={() => updateBookingStatus(record._id, "approved")}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary">Approve</Button>
            </Popconfirm>
            <Popconfirm
              title="Reject this booking?"
              onConfirm={() => updateBookingStatus(record._id, "rejected")}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Reject</Button>
            </Popconfirm>
          </div>
        ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Top Section */}
      <div style={{ marginBottom: "20px" }}>
        <DatePicker
          value={date}
          onChange={handleDateChange}
          disabledDate={(current) =>
            !enableDates.some((d) =>
              dayjs(d.selectedDate).isSame(current, "day")
            )
          }
          style={{ marginRight: "20px" }}
        />
        <Radio.Group
          value={price}
          onChange={handlePriceChange}
          style={{ marginRight: "20px" }}
        >
          {availablePrices.map((p) => (
            <Radio.Button key={p} value={p}>
              {p}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>

      {/* Bookings Table */}
      <Table
        dataSource={bookings}
        columns={columns}
        rowKey="_id"
        pagination={false}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default AdminHome;
