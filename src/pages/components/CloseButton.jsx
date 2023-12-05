import React from "react";

export default function CloseButton({ handleClose, closeParam }) {
  return (
    <button
      id={`close-button-${closeParam}`}
      className="close-button"
      onClick={() => {
        handleClose(closeParam);
      }}
    >
      Close
    </button>
  );
}
