import React from "react";
import CloseButton from "./CloseButton";

export default function EventPages({ closeParam, handleClose }) {
  switch (closeParam) {
    case "check-in":
      return (
        <div id="check-in" className="event-container no-display">
          <h2>Check In</h2>
          <div className="event-description-container">
            <p>
              Check In will be held at 8:30 AM.
              <br />
              Location: TBA
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"check-in"} />
          </div>
        </div>
      );
    case "opening-ceremony":
      return (
        <div id="opening-ceremony" className="event-container no-display">
          <h2>Opening Ceremony</h2>
          <div className="event-description-container">
            <p>
              The opening ceremony will be held at 9:30 AM.
              <br />
              Location: TBA
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton
              handleClose={handleClose}
              closeParam={"opening-ceremony"}
            />
          </div>
        </div>
      );

    case "workshop-1":
      return (
        <div id="workshop-1" className="event-container no-display">
          <h2>Workshop I</h2>
          <div className="event-description-container">
            <p>
              The first workshop will be held at 10:30 AM.
              <br />
              Location: TBA
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"workshop-1"} />
          </div>
        </div>
      );
    case "lunch-break":
      return (
        <div id="lunch-break" className="event-container no-display">
          <h2>Network Session</h2>
          <div className="event-description-container">
            <p>
              Lunch will be served at 11:30 AM.
              <br />
              Location: TBA
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"lunch-break"} />
          </div>
        </div>
      );
    case "workshop-2":
      return (
        <div id="workshop-2" className="event-container no-display">
          <h2>Workshop II</h2>
          <div className="event-description-container">
            <p>
              The second workshop will be held at 12:30 PM.
              <br />
              Location: TBA
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"workshop-2"} />
          </div>
        </div>
      );
    case "workshop-3":
      return (
        <div id="workshop-3" className="event-container no-display">
          <h2>Workshop III</h2>
          <div className="event-description-container">
            <p>
              The third workshop will be held at 1:30 PM.
              <br />
              Location: TBA
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"workshop-3"} />
          </div>
        </div>
      );
    case "workshop-4":
      return (
        <div id="workshop-4" className="event-container no-display">
          <h2>Workshop IV</h2>
          <div className="event-description-container">
            <p>
              The fourth workshop will be held at 2:30 PM.
              <br />
              Location: TBA
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"workshop-4"} />
          </div>
        </div>
      );
    case "closing ceremony":
      return (
        <div id="closing-ceremony" className="event-container no-display">
          <h2>Closing Ceremony</h2>
          <div className="event-description-container">
            <p>
              The closing ceremony will be held at 3:30 PM.
              <br />
              Location: TBA
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton
              handleClose={handleClose}
              closeParam={"closing-ceremony"}
            />
          </div>
        </div>
      );

    case "career-fair":
      return (
        <div id="career-fair" className="event-container no-display">
          <h2>Career Fair</h2>
          <div className="event-description-container">
            <p>
              The career fair will be held at 4:30 PM and will run until 7:00
              PM.
              <br />
              Location: TBA
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"career-fair"} />
          </div>
        </div>
      );
    default:
      return (
        <div id="tba" className="event-container no-display">
          <h2>TBA</h2>
          <div className="event-description-container">
            <p>
              Event is still yet to be announced
              <br />
              Location: TBA
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"tba"} />
          </div>
        </div>
      );
  }
}
