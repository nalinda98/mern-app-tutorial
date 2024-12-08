import React, { useEffect, useState } from "react";
import {  message } from "antd";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../utils/ApiClient";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { Instruction } from "../components/Instruction";
import { ConfirmModal } from "../components/ConfirmModal";
import { TopSection } from "../components/TopSection";
import { RenderButtons } from "../components/RenderButtons";

export const Home = () => {
  const [date, setDate] = useState();
  const [price, setPrice] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [reservedNumbers, setReservedNumbers] = useState([]);
  const [reserverName, setReserverName] = useState("");
  const [receiptFile, setReceiptFile] = useState(null);
  const [enableDates, setEnableDates] = useState([]);
  const [availablePrices, setAvailablePrices] = useState([]);
  const [disabledNumbers, setDisabledNumbers] = useState([]);
  const [pendingNumbers, setPendingNumbers] = useState([]);
  const loggeduserId = useSelector((state) => state.auth.id);
  const navigate = useNavigate();

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const fetchDates = async () => {
    try {
      const response = await ApiClient.get("/dateEnable");
      if (response.data.success) {
        setEnableDates(response.data.dates);
      } else {
        message.error("Failed to fetch dates.");
      }
    } catch (error) {
      message.error("Error fetching dates.");
    }
  };

  const fetchData = async () => {
    try {
      const response = await ApiClient.get("/booking", {
        params: {
          date: date?.format("YYYY-MM-DD"),
          price,
        },
      });

      if (response.data.success) {
        setDisabledNumbers(response.data.numbers.approved.map(String));
        setPendingNumbers(response.data.numbers.pending.map(String));
      } else {
        message.error("Failed to fetch numbers data.");
      }
    } catch (error) {
      message.error("Error fetching data.");
    }
  };

  const updateURL = (selectedDate, selectedPrice) => {
    const formattedDate = selectedDate
      ? selectedDate?.format("YYYY-MM-DD")
      : "";
    navigate(`?date=${formattedDate}&price=${selectedPrice}`);
  };

  useEffect(() => {
    fetchDates();
  }, []);

  useEffect(() => {
    price && fetchData();
    setSelectedNumbers([]);
  }, [price]);

  const handleButtonClick = async (number) => {
    if (!date || !price) {
      message.error("Please select date and price first.");
      return;
    }
    if (reservedNumbers.includes(number) || disabledNumbers.includes(number)) {
      return;
    }
    setSelectedNumbers((prev) =>
      prev.includes(number)
        ? prev.filter((num) => num !== number)
        : [...prev, number]
    );
  };

  const handleOkClick = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleFileChange = (info) => {
    setReceiptFile(info.file);
  };

  const disabledDate = (current) => {
    return !enableDates.some((d) =>
      dayjs(d.selectedDate).isSame(current, "day")
    );
  };

  return (
    <div className="row w-100">
      <div style={{ padding: "10px" }} className="col-8">
        {/* Top Section */}
        <TopSection
          date={date}
          price={price}
          handleOkClick={handleOkClick}
          selectedNumbers={selectedNumbers}
          availablePrices={availablePrices}
          disabledDate={disabledDate}
          enableDates={enableDates}
          setDate={setDate}
          setAvailablePrices={setAvailablePrices}
          setPrice={setPrice}
          updateURL={updateURL}
          setSelectedNumbers={setSelectedNumbers}
          setDisabledNumbers={setDisabledNumbers}
          setPendingNumbers={setPendingNumbers}
        />

        {/* Buttons for 00 to 99 */}
        <RenderButtons
          handleButtonClick={handleButtonClick}
          disabledNumbers={disabledNumbers}
          pendingNumbers={pendingNumbers}
          selectedNumbers={selectedNumbers}
        />

        {/* Modal */}
        <ConfirmModal
          modalVisible={modalVisible}
          handleModalCancel={handleModalCancel}
          selectedNumbers={selectedNumbers}
          price={price}
          date={date}
          reserverName={reserverName}
          setReserverName={setReserverName}
          status={status}
          handleStatusChange={handleStatusChange}
          handleFileChange={handleFileChange}
          receiptFile={receiptFile}
          loggeduserId={loggeduserId}
          setModalVisible={setModalVisible}
          setSelectedNumbers={setSelectedNumbers}
          setReservedNumbers={setReservedNumbers}
          fetchData={fetchData}
          setReceiptFile={setReceiptFile}
          setStatus={setStatus}
        />
      </div>
      <div className="col-4">
        <Instruction />
      </div>
    </div>
  );
};
