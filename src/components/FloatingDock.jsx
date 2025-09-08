import React from "react";
import { MessengerBtn } from "./MessengerBtn";
import { WhatsAppBtn } from "./WhatsAppBtn";
import "./floating-dock.css";
import { useMediaQuery } from "react-responsive";

export const FloatingDock = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div className="floating-dock">
      <div className="icons">
        <WhatsAppBtn />
        {/* <MessengerBtn /> */}
        {/* You can add more floating buttons here, e.g. <ScrollToTopButton /> */}
      </div>
    </div>
  );
};
