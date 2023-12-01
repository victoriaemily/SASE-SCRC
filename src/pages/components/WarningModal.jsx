import React from "react";
import CloseButton from "./CloseButton";

export default function WarningModal({ isModalOpen, setIsModalOpen }) {
  return (
    <div
      id="warning-modal"
      className={`modal-overlay${isModalOpen ? "" : " hide-modal"}`}
    >
      <div className="modal">
        <h2>Oops! You're Early!</h2>
        <p>
          Registration is currently not available. Look out for any updates when
          we announce registration opening.
        </p>
        <CloseButton handleClose={setIsModalOpen} closeParam={false} />
      </div>
    </div>
  );
}
