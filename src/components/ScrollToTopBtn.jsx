import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="scroll-to-top-btn"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: window.innerWidth <= 600 ? "80px" : "100px",
        right: window.innerWidth <= 600 ? "16px" : "40px",
        zIndex: 9999,
        background: "#f4a940",
        color: "#fff",
        width: window.innerWidth <= 600 ? "40px" : "48px",
        height: window.innerWidth <= 600 ? "40px" : "48px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition:
          "background 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1), visibility 0.4s cubic-bezier(0.4,0,0.2,1)",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transform: isVisible ? "scale(1)" : "scale(0.8)",
        pointerEvents: isVisible ? "auto" : "none",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#135c63")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#f4a940")}
    >
      <FaArrowUp size={24} />
    </div>
  );
};

export default ScrollToTopButton;
