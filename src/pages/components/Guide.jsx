import React from "react";
import { morningEvents, afternoonEvents } from "@/assets/events";

export default function Guide() {
  const handleScheduleOpen = () => {
    var scheduleContainer = document.getElementById("schedule-container");
    scheduleContainer.classdivst.remove("close-schedule");
    scheduleContainer.classdivst.add("open-schedule");
    document.body.classdivst.add("open-schedule");
    document.body.classdivst.remove("close-schedule");
  };

  const handleScheduleClose = () => {
    var scheduleContainer = document.getElementById("schedule-container");
    scheduleContainer.classdivst.remove("open-schedule");
    scheduleContainer.classdivst.add("close-schedule");
    document.body.classdivst.remove("open-schedule");
    document.body.classdivst.add("close-schedule");
  };

  const renderEvent = (event, idx) => {
    const start_minutes = event.start_time.getMinutes();
    const start_hours = event.start_time.getHours();
    const start_AMPM = start_hours >= 12 ? "PM" : "AM";

    const startTime = `${String(start_hours % 12 || 12).padStart(
      2,
      "0"
    )}:${String(start_minutes).padStart(2, "0")} ${start_AMPM}`;

    const end_minutes = event.end_time.getMinutes();
    const end_hours = event.end_time.getHours();
    const end_AMPM = end_hours >= 12 ? "PM" : "AM";

    const endTime = `${String(end_hours % 12 || 12).padStart(2, "0")}:${String(
      end_minutes
    ).padStart(2, "0")} ${end_AMPM}`;
    if (event.isTransition) {
      return (
        <div key={idx} className="transition-divider divider-pad">
          <h2 className="departure-label">{event.name}</h2>
          <h2 className="gate-label"></h2>
          <h2 className="start-time-label">
            {startTime} - {endTime}
          </h2>
          <h2 className="status-label"></h2>
        </div>
      );
    } else {
      return (
        <button key={idx} className="event-divider divider-pad">
          <h2 className="departure-label">{event.name}</h2>
          <h2 className="gate-label">{event.location}</h2>
          <h2 className="start-time-label">
            {startTime} - {endTime}
          </h2>
          <h2 className="status-label">{event.status}</h2>
        </button>
      );
    }
  };

  return (
    <section id="key-dates" className="wrapper">
      <div className="schedule-board">
        <div className="header-container">
          <div className="logo">scrc logo</div>
          <h2 className="event-title">SASE/SCRC</h2>
          <>
            <h2 className="long-title">EVENT & WORKSHOP DEPARTURES</h2>
            <h2 className="short-title">DEPARTURES</h2>
          </>
        </div>
        <div className="label divider-pad">
          <h2 className="departure-label">Departure For</h2>
          <h2 className="gate-label">Gate</h2>
          <h2 className="start-time-label">Time (CST)</h2>
          <h2 className="status-label">Status</h2>
        </div>
        <h3 className="time-divider divider-pad">Morning Block</h3>
        {morningEvents.map((event, idx) => renderEvent(event, idx))}
        <h3 className="time-divider divider-pad">Afternoon Block</h3>
        {afternoonEvents.map((event, idx) => renderEvent(event, idx))}
      </div>
      <div id="schedule-container">
        <div id="schedule-content-container">
          <button
            className="schedule-toggle-button"
            id="close-schedule-button"
            type="button"
            onClick={handleScheduleClose}
          ></button>
        </div>
      </div>
    </section>
  );
}
