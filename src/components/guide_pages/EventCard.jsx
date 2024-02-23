import React from "react";

export default function EventCard({ event }) {
	return (
		<div>
			<div>{`${event.start_time}-${event.end_time}`}</div>
			<div>
				<h2>{event.name}</h2>
				<h3>{event.location}</h3>
			</div>
		</div>
	);
}
