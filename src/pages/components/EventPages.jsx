import React from "react";
import CloseButton from "./CloseButton";

export default function EventPages({ closeParam, handleClose }) {
  switch (closeParam) {
    case "registration":
      return (
        <div id="registration" className="event-container no-display">
          <h2>Registration</h2>
          <div className="event-description-container">
            <p>
              Registration will be held at 9:00 AM.
              <br />
              Location is still yet to be announced.
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton
              handleClose={handleClose}
              closeParam={"registration"}
            />
          </div>
        </div>
      );
    case "opening-ceremony":
      return (
        <div id="opening-ceremony" className="event-container no-display">
          <h2>Opening Ceremony</h2>
          <div className="event-description-container">
            <p>
              The opening ceremony will be held at 10:00 AM.
              <br />
              Location is still yet to be announced.
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
              The third workshop will be held at 10:00 AM.
              <br />
              Location is still yet to be announced.
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"workshop-1"} />
          </div>
        </div>
      );

    case "workshop-2":
      return (
        <div id="workshop-2" className="event-container no-display">
          <h2>Workshop II</h2>
          <div className="event-description-container">
            <p>
              The second workshop will be held at 11:50 AM.
              <br />
              Location is still yet to be announced.
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"workshop-2"} />
          </div>
        </div>
      );
    case "lunch-break":
      return (
        <div id="lunch-break" className="event-container no-display">
          <h2>Network Session</h2>
          <div className="event-description-container">
            <p>
              Lunch will be served at 12:30 PM.
              <br />
              Location is still yet to be announced.
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"lunch-break"} />
          </div>
        </div>
      );

    case "networking-session":
      return (
        <div id="networking-session" className="event-container no-display">
          <h2>Network Session</h2>
          <div className="event-description-container">
            <p>
              The networking session will be held at 1:45 PM.
              <br />
              Location is still yet to be announced.
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton
              handleClose={handleClose}
              closeParam={"networking-session"}
            />
          </div>
        </div>
      );

    case "workshop-3":
      return (
        <div id="workshop-3" className="event-container no-display">
          <h2>Workshop III</h2>
          <div className="event-description-container">
            <p>
              The third workshop will be held at 3:00 PM.
              <br />
              Location is still yet to be announced.
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"workshop-3"} />
          </div>
        </div>
      );
    case "closing ceremony":
      return (
        <div id="closing-ceremony" className="event-container no-display">
          <h2>Closing Ceremony</h2>
          <div className="event-description-container">
            <p>
              The closing ceremony will be held at 4:00 PM.
              <br />
              Location is still yet to be announced.
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
              The career fair will be held at 4:45 PM.
              <br />
              Location is still yet to be announced.
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
              Location is still yet to be announced.
            </p>
          </div>
          <div className="event-close-container">
            <CloseButton handleClose={handleClose} closeParam={"tba"} />
          </div>
        </div>
      );
  }
}
