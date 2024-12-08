import React from "react";
import { Row, Col } from "antd";

export const RenderButtons = ({
    handleButtonClick,
    disabledNumbers,
    pendingNumbers,
    selectedNumbers,
}) => {
    const renderButtons = () => {
        const buttons = [];
        for (let i = 0; i < 100; i++) {
          const number = String(i).padStart(2, "0"); // Ensure number is always a two-digit string
          let buttonStyle = {
            width: "100%",
            padding: "8px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            color: "black",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
    
            transition: "background-color 0.3s, transform 0.2s",
          };
    
          // Normalize the arrays to two-digit strings for comparison
          const isDisabled = disabledNumbers
            .map(String)
            .map((n) => n.padStart(2, "0"))
            .includes(number);
          const isPending = pendingNumbers
            .map(String)
            .map((n) => n.padStart(2, "0"))
            .includes(number);
          const isSelected = selectedNumbers.includes(number);
    
          if (isSelected) {
            buttonStyle = { ...buttonStyle, backgroundColor: "#0000FF" };
          } else if (isDisabled) {
            buttonStyle = {
              ...buttonStyle,
              backgroundColor: "red",
              cursor: "not-allowed",
            };
          } else if (isPending) {
            buttonStyle = {
              ...buttonStyle,
              backgroundColor: "orange",
              cursor: "not-allowed",
            };
          }
    
          buttons.push(
            <Col
              span={2}
              key={i}
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5px",
              }}
            >
              <button
                style={buttonStyle}
                onClick={() => handleButtonClick(number)}
                disabled={isDisabled}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#e0e0e0",
                    }}
                  >
                    {number[0]}
                  </div>
    
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#e0e0e0",
                    }}
                  >
                    {number[1]}
                  </div>
                </span>
              </button>
            </Col>
          );
        }
        return buttons;
      };
  return (
    <row
      style={{
        backgroundImage: "url()", // Replace with your image URL
        backgroundSize: "cover", // Adjust size of the image
        backgroundRepeat: "no-repeat", // Prevent tiling
        backgroundPosition: "center", // Center the image
        //  opacity: 0.2,
      }}
    >
      <Row
        gutter={[8, 8]}
        style={{
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {/* <img src={img} style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100vw",
              height: "100vh",
              opacity: 0.2,
              zIndex: -1,
            }} /> */}
        {renderButtons()}
      </Row>
    </row>
  );
};
