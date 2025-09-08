import React from "react";
import "./MessengerBtn.css";
import { RiMessengerLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

export const MessengerBtn = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div
      className="floating-whatsapp"
      style={{
        scale: isTabletOrMobile ? "1" : "1.5",
        // position: "fixed",
        // bottom: "25px",
        // right: "110px",
        // zIndex: "99",
      }}
    >
      <div className="floating-icon">
        <a href="https://m.me/0BuildZoneIT" target="_blank">
          <RiMessengerLine
            size={50}
            style={{
              // fontSize: "40px",
              color: "#316FF6",
              // backgroundColor: "#25d366",
              // borderRadius: "50%",
              // padding: "10px",
              // boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              // transition: "0.3s"
            }}
          />
        </a>
      </div>
    </div>
  );
};
