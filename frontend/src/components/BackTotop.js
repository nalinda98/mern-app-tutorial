import React from "react";

export const BackTotop = () => {
  return (
    <div
      style={{
        zIndex: 1000,
        position: "fixed",
        bottom: "20px",
        right: "20px",
      }}
    >
      <a href="#" className="btn btn-outline-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
};
