import { React, useState } from "react";

export default function EventCard({ event, eventSelect }) {
	const [eventShown, setEventShown] = useState(false);

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

	const currentTime = new Date();
	const isCurrentEvent =
		currentTime >= event.start_time && currentTime <= event.end_time;

	const description = event.description.split("\n");
	let workshopInfo = [];
	if (event.isWorkshop) {
		workshopInfo.push(event.option1);
		workshopInfo.push(event.option2);
		workshopInfo.push(event.option3);
	}
	return (
		<div className="event-card">
			<div className="event-time flex-column">
				<h3 className="event-time-start">{`${startTime}`}</h3>
				<h3 className="event-time-end">{`${endTime}`}</h3>
			</div>
			<div className="event-label flex-column">
				<button onClick={(e) => eventSelect(e, eventShown, setEventShown)}>
					<h3>{isCurrentEvent ? `>>> ${event.name} <<<` : event.name}</h3>
					<h4>{event.location}</h4>
				</button>
				<div className="event-description hide-overlay">
					{description.map((paragraph, idx) => (
						<p key={idx}>{paragraph}</p>
					))}
					{workshopInfo.map((workshop, idx) => {
						return (
							<div key={idx} className="workshop-description">
								<h5>
									{workshop.name} [{workshop.location}]
								</h5>
								<p>{workshop.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
