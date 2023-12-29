import React from "react";
import { morningEvents, afternoonEvents } from "@/assets/events";
import RellaxWrapper from "react-rellax-wrapper";
import EventPages from "../components/EventPages.jsx";

export default function Guide() {
  const handleFlipDivider = (eventId) => {
    document.querySelectorAll(".schedule-divider").forEach((divider, idx) => {
      const flipAnimationDelay = 0.08 * idx;
      divider.style.transitionDelay = `${flipAnimationDelay}s`;
      if (!divider.classList.contains("flip-divider")) {
        document.querySelectorAll(".label").forEach((blueDivider, _) => {
          blueDivider.classList.add("white-background");
        });
        divider.querySelector(".front-divider").classList.add("no-border");
        divider.classList.add("flip-divider");
        setTimeout(() => {
          setTimeout(() => {
            document.getElementById(eventId).classList.remove("hide-overlay");
            document.getElementById(eventId).classList.add("flex-overlay");
            document.documentElement.style.overflow = "hidden";
          }, 750);
        }, 500);
      } else {
        document.getElementById(eventId).classList.add("hide-overlay");
        document.getElementById(eventId).classList.remove("flex-overlay");
        divider.querySelector(".front-divider").classList.remove("no-border");
        document.querySelectorAll(".label").forEach((blueDivider, _) => {
          blueDivider.classList.remove("white-background");
        });
        divider.classList.remove("flip-divider");
        document.documentElement.style.overflow = "auto";
      }
    });
  };

  const renderEvent = (event, idx) => {
    let startTime = event.start_time;
    let endTime = event.end_time;
    if (event.start_time !== "TBA") {
      const start_minutes = event.start_time.getMinutes();
      const start_hours = event.start_time.getHours();
      const start_AMPM = start_hours >= 12 ? "PM" : "AM";

      startTime = `${String(start_hours % 12 || 12).padStart(2, "0")}:${String(
        start_minutes
      ).padStart(2, "0")} ${start_AMPM}`;

      const end_minutes = event.end_time.getMinutes();
      const end_hours = event.end_time.getHours();
      const end_AMPM = end_hours >= 12 ? "PM" : "AM";

      endTime = `${String(end_hours % 12 || 12).padStart(2, "0")}:${String(
        end_minutes
      ).padStart(2, "0")} ${end_AMPM}`;
    }
    if (event.isTransition) {
      return (
        <div key={idx} className="schedule-divider transition-divider">
          <div className="pad-divider front-divider">
            <h3 className="start-time-label">
              {startTime === endTime ? startTime : `${startTime} - ${endTime}`}
            </h3>
            <div className="event-location-labels">
              <h2 className="departure-label">{event.name}</h2>
              <h2 className="gate-label"></h2>
            </div>
            <h3 className="status-label"></h3>
          </div>
          <div className="pad-divider back-divider"></div>
        </div>
      );
    } else {
      return (
        <div key={idx} className="schedule-divider event-divider">
          <button
            className="pad-divider front-divider"
            type="button"
            onClick={() => {
              handleFlipDivider(event.id);
            }}
          >
            <h3 className="start-time-label">
              {startTime === endTime ? startTime : `${startTime} - ${endTime}`}
            </h3>
            <div className="event-location-labels">
              <h2 className="event-label">{event.name}</h2>
              <h2 className="gate-label">{event.location}</h2>
            </div>
            <h3 className="status-label">{event.status}</h3>
          </button>
          <div className="pad-divider back-divider"></div>
        </div>
      );
    }
  };

  return (
    <>
      <RellaxWrapper speed={-6}>
        <div id="schedule-background">
          <div className="background-overlay"></div>
        </div>
      </RellaxWrapper>
      <RellaxWrapper speed={0}>
        <div className="page-body">
          <div className="page-header">
            <h2>South Central Regional Conference</h2>
            <div className="page-title">
              <h1>Schedule</h1>
            </div>
            <h3>Texas A&M University | March 2nd, 2024</h3>
          </div>
          <div className="page-content">
            <div id="schedule-container" className="content-container">
              <div className="schedule-divider time-divider">
                <h1 className="pad-divider front-divider">Morning Block</h1>
                <div className="pad-divider back-divider"></div>
              </div>
              {morningEvents.map((event, idx) => renderEvent(event, idx))}
              <div className="schedule-divider time-divider">
                <h1 className="pad-divider front-divider">Afternoon Block</h1>
                <div className="pad-divider back-divider"></div>
              </div>
              {afternoonEvents.map((event, idx) => renderEvent(event, idx))}
              <div className="back-divider"></div>
            </div>
          </div>
        </div>
      </RellaxWrapper>
      <EventPages
        closeParam="check-in"
        handleClose={handleFlipDivider}
      ></EventPages>
      <EventPages
        closeParam="opening-ceremony"
        handleClose={handleFlipDivider}
      ></EventPages>
      <EventPages
        closeParam="workshop-1"
        handleClose={handleFlipDivider}
      ></EventPages>
      <EventPages
        closeParam="lunch-break"
        handleClose={handleFlipDivider}
      ></EventPages>
      <EventPages
        closeParam="workshop-2"
        handleClose={handleFlipDivider}
      ></EventPages>
      <EventPages
        closeParam="workshop-3"
        handleClose={handleFlipDivider}
      ></EventPages>
      <EventPages
        closeParam="workshop-4"
        handleClose={handleFlipDivider}
      ></EventPages>
      <EventPages
        closeParam="closing-ceremony"
        handleClose={handleFlipDivider}
      ></EventPages>
      <EventPages
        closeParam="career-fair"
        handleClose={handleFlipDivider}
      ></EventPages>
    </>
  );
}
