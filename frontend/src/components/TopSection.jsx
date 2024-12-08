import React from "react";
import { DatePicker, Radio, Button } from "antd";
import dayjs from "dayjs";

export const TopSection = ({
  date,
  disabledDate,
  price,
  selectedNumbers,
  handleOkClick,
  availablePrices,
  enableDates,
  setDate,
  setAvailablePrices,
  setPrice,
  updateURL,
  setSelectedNumbers,
  setDisabledNumbers,
  setPendingNumbers,
}) => {
  const handleDateChange = (date) => {
    setDate(date);
    const selectedDatePrices = enableDates.find((d) =>
      dayjs(d.selectedDate).isSame(date, "day")
    )?.prices;
    setAvailablePrices(selectedDatePrices || []); // Set default price if available
    updateURL(date, price);
    setSelectedNumbers([]);
    setPrice(null);
    setDisabledNumbers([]);
    setPendingNumbers([]);
  };

  const handlePriceChange = (e) => {
    const selectedPrice = e.target.value;
    setPrice(selectedPrice);
    updateURL(date, selectedPrice);
  };
  return (
    <div
      style={{ marginBottom: "20px", marginLeft: "20px", marginRight: "10px" }}
      className=" justify-content-center"
    >
      <div className="d-flex justify-content-between">
        <div className="">
          <DatePicker
            value={date}
            onChange={handleDateChange}
            disabledDate={disabledDate}
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
        <div>
          {price && (
            <div
              style={{
                display: "inline-block",
                marginLeft: "10px",
                position: "relative",
                backgroundColor: "#5A8CB1", // Theme color
                color: "#fff",
                borderRadius: "50px", // Circular edges
                padding: "10px 20px",
                fontWeight: "bold",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "-10px",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border: "2px solid #5A8CB1",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border: "2px solid #5A8CB1",
                }}
              ></div>
              Winnings: Rs.{price * 80}/=
            </div>
          )}
        </div>
        <div>
          <Button
            type="primary"
            onClick={handleOkClick}
            disabled={selectedNumbers.length === 0}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};
