import React from "react";
import CloseEventButton from "./CloseEventButton";

export default function EventPages({ eventId, handleFlipDivider }) {
  switch (eventId) {
    case "tba":
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
          <CloseEventButton
            handleFlipDivider={handleFlipDivider}
            eventId={"tba"}
          />
        </div>
      );

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
          <CloseEventButton
            handleFlipDivider={handleFlipDivider}
            eventId={"registration"}
          />
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
          <CloseEventButton
            handleFlipDivider={handleFlipDivider}
            eventId={"opening-ceremony"}
          />
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
          <CloseEventButton
            handleFlipDivider={handleFlipDivider}
            eventId={"workshop-1"}
          />
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
          <CloseEventButton
            handleFlipDivider={handleFlipDivider}
            eventId={"workshop-2"}
          />
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
          <CloseEventButton
            handleFlipDivider={handleFlipDivider}
            eventId={"lunch-break"}
          />
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
          <CloseEventButton
            handleFlipDivider={handleFlipDivider}
            eventId={"networking-session"}
          />
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
          <CloseEventButton
            handleFlipDivider={handleFlipDivider}
            eventId={"workshop-3"}
          />
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
          <CloseEventButton
            handleFlipDivider={handleFlipDivider}
            eventId={"closing-ceremony"}
          />
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
          <CloseEventButton
            handleFlipDivider={handleFlipDivider}
            eventId={"career-fair"}
          />
        </div>
      );
  }
  return <div>EventPages</div>;
}
