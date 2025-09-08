import React from "react";
import "./WhatsAppBtn.css";
import { RiWhatsappLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

export const WhatsAppBtn = () => {

  return (
    <div
      className="floating-whatsapp"
      style={{
        position: "fixed",
        bottom: window.innerWidth <= 600 ? "24px" : "40px",
        right: window.innerWidth <= 600 ? "16px" : "40px",
        zIndex: 9999,
        background: "#25D366",
        color: "#fff",
        width: window.innerWidth <= 600 ? "40px" : "48px",
        height: window.innerWidth <= 600 ? "40px" : "48px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition: "background 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
        scale: "1"
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "#128C7E")}
      onMouseLeave={e => (e.currentTarget.style.background = "#25D366")}
    >
      <a
        href="https://wa.me/94777284460"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}
      >
        <RiWhatsappLine size={24} />
      </a>
    </div>
  );
};
