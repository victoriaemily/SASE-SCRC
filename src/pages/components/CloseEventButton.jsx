import React from "react";

export default function CloseEventButton({ handleFlipDivider, eventId }) {
  return (
    <div className="close-event-container">
      <button
        className="close-event-button"
        onClick={() => {
          handleFlipDivider(eventId);
        }}
      >
        Close
      </button>
    </div>
  );
}
