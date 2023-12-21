import React, { useState } from "react";
import WarningModal from "@/pages/components/WarningModal";

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
    <section>
      <a
        className="registration-link"
        target="_blank"
        onClick={() => handleOpenRegisterModal(true)}
      >
        Register
      </a>
      <div className="big"></div>
      <WarningModal
        isModalOpen={isRegisterModalOpen}
        setIsModalOpen={handleOpenRegisterModal}
      />
    </section>
  );
}
