import React, { useEffect, useState } from "react";
import { Modal, Button, Input, DatePicker, message, Table } from "antd";
import { useSelector } from "react-redux";
import { ApiClient } from "../../utils/ApiClient";

export const DateEnable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [prices, setPrices] = useState("");
  const [tableData, setTableData] = useState([]); // State to store table data
  const loggedUserId = useSelector((state) => state.auth.id);
  const loggedUserRole = useSelector((state) => state.auth.role);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  useEffect(() => {
    console.log("formattedData", tableData);
  }, [tableData]);

  // Fetch dates with prices
  const fetchDates = async () => {
    try {
      const response = await ApiClient.get("/dateEnable");
      if (response.status===200) {
        // Map data to table format
        const formattedData = response.data.dates.map((date, index) => ({
          key: date._id,
          index: index + 1,
          selectedDate: date.selectedDate,
          prices: date.prices.join(", "), // Convert prices array to a string
          createdBy: date.createdBy.name,
        }));
        setTableData(formattedData);
      } else {
        message.error("Failed to fetch dates.");
      }
    } catch (error) {
      console.error("Error fetching dates:", error);
      message.error("An error occurred while fetching dates.");
    }
  };

  useEffect(() => {
    fetchDates();
  }, []);

  const handleSave = async () => {
    if (!selectedDate || !prices) {
      message.error("Please select a date and enter prices.");
      return;
    }

    // Convert the prices string into an array of numbers
    const priceArray = prices
      .split(",")
      .map((price) => parseFloat(price.trim()))
      .filter((price) => !isNaN(price)); // Remove any invalid numbers

    if (priceArray.length === 0) {
      message.error("Please enter valid prices.");
      return;
    }

    const body = {
      selectedDate,
      prices: priceArray,
      createdBy: loggedUserId,
    };

    try {
      await ApiClient.post("/dateEnable", body);
      message.success("Date enabled successfully!");
      setIsModalOpen(false);
      setSelectedDate(null);
      setPrices("");
      fetchDates(); 
    } catch (error) {
      console.error("Error enabling date:", error);
      message.error("Failed to enable the date. Please try again.");
    }
  };

  // Table columns
  const columns = [
    {
      title: "Index",
      dataIndex: "index",
      key: "index",
      width: "10%",
    },
    {
      title: "Date",
      dataIndex: "selectedDate",
      key: "selectedDate",
      render: (text) => new Date(text).toLocaleDateString(), // Format date
    },
    {
      title: "Prices",
      dataIndex: "prices",
      key: "prices",
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
    },
  ];

  return (
    <div >
      {loggedUserRole==="super-admin" && <Button
        type="primary"
        onClick={showModal}
        style={{ marginBottom: "10px" }}
      >
        Enable Date
      </Button>}
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{ pageSize: 10 }}
        style={{ marginBottom: "20px" }}
      />
      <Modal
        title="Enable Date"
        visible={isModalOpen}
        onCancel={handleCancel}
        onOk={handleSave}
        okText="Save"
        cancelText="Cancel"
      >
        <div style={{ marginBottom: "15px" }}>
          <label>Select Date:</label>
          <DatePicker
            style={{ width: "100%" }}
            onChange={(date, dateString) => setSelectedDate(dateString)}
          />
        </div>
        <div>
          <label>Enter Prices (comma-separated):</label>
          <Input
            placeholder="e.g., 100, 200, 500"
            value={prices}
            onChange={(e) => setPrices(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};
