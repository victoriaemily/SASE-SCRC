import React from "react";
import { morningEvents, afternoonEvents } from "@/assets/events";
import EventPages from "./components/EventPages";

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
          document
            .querySelector(".schedule-board")
            .classList.add("white-background");
          setTimeout(() => {
            document.getElementById(eventId).classList.remove("no-display");
          }, 750);
        }, 500);
      } else {
        document.getElementById(eventId).classList.add("no-display");
        divider.querySelector(".front-divider").classList.remove("no-border");
        document.querySelectorAll(".label").forEach((blueDivider, _) => {
          blueDivider.classList.remove("white-background");
        });
        document
          .querySelector(".schedule-board")
          .classList.remove("white-background");
        divider.classList.remove("flip-divider");
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
        <div
          key={idx}
          className="schedule-divider transition-divider blue3-divider"
        >
          <div className="pad-divider front-divider">
            <h2 className="departure-label">{event.name}</h2>
            <h2 className="gate-label"></h2>
            <h2 className="start-time-label">
              {startTime === endTime ? startTime : `${startTime} - ${endTime}`}
            </h2>
            <h2 className="status-label"></h2>
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
            <h2 className="departure-label">{event.name}</h2>
            <h2 className="gate-label">{event.location}</h2>
            <h2 className="start-time-label">
              {startTime === endTime ? startTime : `${startTime} - ${endTime}`}
            </h2>
            <h2 className="status-label">{event.status}</h2>
          </button>
          <div className="pad-divider back-divider"></div>
        </div>
      );
    }
  };

  return (
    <section id="key-dates" className="wrapper">
      <div className="schedule-container">
        <div className="schedule-board">
          <div className="schedule-divider header-container">
            <div className="pad-divider front-divider">
              <div className="logo">scrc logo</div>
              <h2 className="event-title">SASE/SCRC</h2>
              <>
                <h2 className="long-title">EVENT & WORKSHOP DEPARTURES</h2>
                <h2 className="short-title">DEPARTURES</h2>
              </>
            </div>
            <div className="pad-divider back-divider"></div>
          </div>
          <div className="schedule-divider label">
            <div className="pad-divider front-divider">
              <h2 className="departure-label">Departure For</h2>
              <h2 className="gate-label">Gate</h2>
              <h2 className="start-time-label">Time (CST)</h2>
              <h2 className="status-label">Status</h2>
            </div>
            <div className="pad-divider back-divider"></div>
          </div>
          <div className="schedule-divider time-divider blue3-divider">
            <h3 className="pad-divider front-divider">Morning Block</h3>
            <div className="pad-divider back-divider"></div>
          </div>
          {morningEvents.map((event, idx) => renderEvent(event, idx))}
          <div className="schedule-divider time-divider blue3-divider">
            <h3 className="pad-divider front-divider">Afternoon Block</h3>
            <div className="pad-divider back-divider"></div>
          </div>
          {afternoonEvents.map((event, idx) => renderEvent(event, idx))}
          <div className="back-divider"></div>
        </div>
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
      </div>
    </section>
  );
}
