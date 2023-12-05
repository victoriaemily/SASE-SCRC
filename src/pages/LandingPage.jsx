import React, { useState } from "react";
import WarningModal from "./components/WarningModal";

export default function LandingPage() {
  const [isRegisterModalOpen, setIsOpenRegisterModalOpen] = useState(false);
  const handleOpenRegisterModal = (isOpen) => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
    setIsOpenRegisterModalOpen(isOpen);
  };
  return (
    <section id="landing-page" className="wrapper">
      <div className="splash-title">
        <div id="sase-title" className="logo scrc-logo-black"></div>
        <h1 id="sc-title">South Central</h1>
        <h1 id="rc-title">Regional Conference</h1>
        <h2 id="at-title">@Texas A&M University - College Station</h2>
      </div>
      <div className="key-info-container">
        <a
          className="registration-link"
          target="_blank"
          onClick={() => handleOpenRegisterModal(true)}
        >
          Register
        </a>
        <div className="banner">
          <div className="date-banner">
            <div className="banner-label">March 2nd, 2024</div>
          </div>
          <div className="right-facing-plane" id="plane"></div>
        </div>
      </div>
      <WarningModal
        isModalOpen={isRegisterModalOpen}
        setIsModalOpen={handleOpenRegisterModal}
      />
    </section>
  );
}
