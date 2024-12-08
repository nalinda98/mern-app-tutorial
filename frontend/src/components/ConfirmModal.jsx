import React from "react";
import { Modal, Input, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { message } from "antd";
import { ApiClient } from "../utils/ApiClient";
import jsPDF from "jspdf";
import "jspdf-autotable";

export const ConfirmModal = ({
  modalVisible,
  handleModalCancel,
  selectedNumbers,
  price,
  date,
  reserverName,
  setReserverName,
  status,
  handleStatusChange,
  handleFileChange,
  receiptFile,
  loggeduserId,
  setModalVisible,
  setSelectedNumbers,
  setReservedNumbers,
  fetchData,
  setReceiptFile,
  setStatus,
}) => {
  const handleModalOk = async () => {
    const body = {
      numbers: selectedNumbers,
      price,
      total: selectedNumbers.length * price,
      reserverName,
      date: date?.format("YYYY-MM-DD"),
      approvedBy: loggeduserId,
      status,
    };
  
    try {
      const response = await ApiClient.post("/booking", body);
      if (response.data.success) {
        message.success("Numbers reserved successfully.");
        generateReceiptPdf(body); // Generate and save the receipt
        fetchData();
      } else {
        message.error("Failed to reserve numbers.");
      }
    } catch (error) {
      message.error("Error reserving numbers.");
    }
  
    handleReset();
  };
  
  const generateReceiptPdf = (data) => {
    const doc = new jsPDF();
  
    // Add title and meta-information
    doc.setFontSize(18);
    doc.text("Reservation Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text(`Date: ${data.date}`, 20, 30);
    doc.text(`Reserved By: ${data.reserverName}`, 20, 40);
    doc.text(`Approved By: ${data.approvedBy}`, 20, 50);
  
    // Add numbers table
    doc.autoTable({
      head: [["Reserved Numbers", "Price", "Total"]],
      body: [
        [data.numbers.join(", "), data.price, data.total],
      ],
      startY: 60,
    });
  
    // Save the PDF
    doc.save(`Receipt_${data.date}.pdf`);
  };

  const handleReset = () => {
    setReservedNumbers((prev) => [...prev, ...selectedNumbers]);
    setModalVisible(false);
    setSelectedNumbers([]);
    setReserverName("");
    setReceiptFile(null);
    setStatus("");
  };

  return (
    <Modal
      title="Confirm Reservation"
      visible={modalVisible}
      onOk={handleModalOk}
      okButtonProps={{ disabled: !reserverName || !status }}
      onCancel={handleModalCancel}
      okText="Submit"
      cancelText="Cancel"
    >
      <div style={{ marginBottom: "15px" }}>
        <p>
          <strong>Selected Numbers:</strong> {selectedNumbers.join(", ")}
        </p>
        <p>
          <strong>Total Price:</strong> {selectedNumbers.length * price}
        </p>
        <p>
          <strong>Selected Date:</strong> {date?.format("YYYY-MM-DD")}
        </p>
        <p>
          <strong>Selected Price:</strong> {price}
        </p>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Reserver Name:</label>
        <Input
          value={reserverName}
          onChange={(e) => setReserverName(e.target.value)}
          placeholder="Ex: 0761234567 John Doe"
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Status:</label>
        <Select
          value={status}
          onChange={handleStatusChange}
          style={{ width: "100%" }}
        >
          <Select.Option value="pending">Pending</Select.Option>
          <Select.Option value="approved">Approved</Select.Option>
          {/* <Select.Option value="rejected">Rejected</Select.Option>
              <Select.Option value="cancelled">Cancelled</Select.Option> */}
        </Select>
      </div>
      <div>
        <label>Upload Receipt:</label>
        <Upload
          beforeUpload={() => false}
          onChange={handleFileChange}
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
    </Modal>
  );
};
