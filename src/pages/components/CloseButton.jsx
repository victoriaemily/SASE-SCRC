import React from "react";

export default function CloseButton({ handleClose, closeParam }) {
  return (
    <button
      className="close-button"
      onClick={() => {
        handleClose(closeParam);
      }}
    >
      Close
    </button>
  );
}
