import React from "react";
import { morningEvents, afternoonEvents } from "@/assets/events";
import RellaxWrapper from "react-rellax-wrapper";

export default function Guide() {
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
          <div className="pad-divider">
            <h3 className="start-time-label time-label">{startTime}</h3>
            <h3 className="full-time-label time-label">
              {startTime === endTime ? startTime : `${startTime} - ${endTime}`}
            </h3>
            <div className="event-location-labels">
              <h2 className="departure-label">{event.name}</h2>
              <h2 className="gate-label"></h2>
            </div>
            <h3 className="other-labels"></h3>
          </div>
        </div>
      );
    } else {
      return (
        <div key={idx} className="schedule-divider event-divider">
          <button className="pad-divider" type="button" disabled>
            <h3 className="start-time-label time-label">{startTime}</h3>
            <h3 className="full-time-label time-label">
              {startTime === endTime ? startTime : `${startTime} - ${endTime}`}
            </h3>
            <div className="event-location-labels">
              <h2 className="event-label">{event.name}</h2>
              {!event.isWorkshop ? (
                <h3 className="gate-label">{event.location}</h3>
              ) : null}
            </div>
            <div className="other-labels">
              {event.isWorkshop ? (
                <ul className="workshop-label">
                  <li>{event.option1}</li>
                  <li>{event.option2}</li>
                  <li>{event.option3}</li>
                </ul>
              ) : (
                <div className="workshop-label"></div>
              )}
              <h3 className="status-label">{event.status}</h3>
            </div>
          </button>
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
					<div className="common-header page-header">
						<h2>South Central Regional Conference</h2>
						<div className="page-title">
							<h1>Schedule</h1>
						</div>
						<h3>Texas A&M University | March 2nd, 2024</h3>
					</div>
					<div className="horizontal-phone-header page-header">
						<div className="page-title">
							<h1>Schedule</h1>
						</div>
						<h3>South Central Regional Conference</h3>
					</div>
					<div className="page-content">
						<div id="schedule-container" className="content-container">
							<div className="schedule-divider time-divider">
								<h1 className="pad-divider">Morning Block</h1>
							</div>
							{morningEvents.map((event, idx) => renderEvent(event, idx))}
							<div className="schedule-divider time-divider">
								<h1 className="pad-divider">Afternoon Block</h1>
							</div>
							{afternoonEvents.map((event, idx) => renderEvent(event, idx))}
						</div>
					</div>
				</div>
			</RellaxWrapper>
		</>
	);
}
