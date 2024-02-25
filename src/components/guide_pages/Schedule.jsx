import React from "react";
import EventCard from "./EventCard";
import { afternoonEvents, morningEvents } from "@/assets/events";

export default function Schedule({ isOpen, setIsOpen }) {
	const eventSelect = (e, showEvent, setShowEvent) => {
		const contentElement = e.currentTarget.parentNode;
		const timeElement = contentElement.parentNode.querySelector(".event-time");
		if (showEvent) {
			contentElement.classList.add("collapse-event-content");
			contentElement.classList.remove("expand-event-content");
			setShowEvent(false);
			setTimeout(() => {
				contentElement
					.querySelector(".event-description")
					.classList.add("hide-overlay");
				setTimeout(() => {
					timeElement.classList.remove("hide-overlay");
					timeElement.classList.add("flex-column");
				}, 600);
			}, 200);
		} else {
			timeElement.classList.remove("flex-column");
			timeElement.classList.add("hide-overlay");
			contentElement.classList.add("expand-event-content");
			contentElement.classList.remove("collapse-event-content");
			setShowEvent(true);
			setTimeout(() => {
				contentElement
					.querySelector(".event-description")
					.classList.remove("hide-overlay");
			}, 500);
		}
	};
	return (
		<div className={`guide-page ${isOpen ? "" : "hide-overlay"}`}>
			<div>
				<h1>SCRC Schedule</h1>
				<div className="event-header">
					<h2>Morning Block</h2>
				</div>
				{morningEvents.map((event, idx) => {
					if (!event.isTransition) {
						return (
							<EventCard key={idx} event={event} eventSelect={eventSelect} />
						);
					}
				})}
				<div className="event-header">
					<h2>Afternoon Block</h2>
				</div>
				{afternoonEvents.map((event, idx) => {
					if (!event.isTransition) {
						return (
							<EventCard key={idx} event={event} eventSelect={eventSelect} />
						);
					}
				})}
			</div>
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
