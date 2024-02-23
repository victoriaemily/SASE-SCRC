import React from "react";
import EventCard from "./EventCard";
import { afternoonEvents, morningEvents } from "@/assets/events";

export default function Schedule({ isOpen, setIsOpen }) {
	return (
		<div className={`guide-page ${isOpen ? "" : "hide-overlay"}`}>
			<h1>SCRC Schedule</h1>
			<h2 className="event-header">Morning Block</h2>
			{morningEvents.map((event, idx) => {
				if (!event.isTransition) {
					return <EventCard key={idx} event={event} />;
				}
			})}
			<h2 className="event-header">Afternoon Block</h2>
			{afternoonEvents.map((event, idx) => {
				if (!event.isTransition) {
					return <EventCard key={idx} event={event} />;
				}
			})}
			<button
				onClick={() => {
					setIsOpen(false);
				}}
			>
				Return to Guide
			</button>
		</div>
	);
}
