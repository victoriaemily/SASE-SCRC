import { React, useState } from "react";
import EventCard from "./EventCard";
import { afternoonEvents, morningEvents } from "@/assets/events";

export default function Schedule({ isOpen, setIsOpen }) {
	const [isEmpty, setIsEmpty] = useState(false);

	const eventSelect = (e) => {
		const contentElement = e.currentTarget.parentNode;
		const timeElement = contentElement.parentNode.querySelector(".event-time");
		if (isEmpty) {
			contentElement.classList.add("collapse-event-content");
			contentElement.classList.remove("expand-event-content");
			setTimeout(() => {
				timeElement.classList.remove("hide-overlay");
			}, 500);
			setIsEmpty(false);
		} else {
			setIsEmpty(true);
			timeElement.classList.add("hide-overlay");
			contentElement.classList.add("expand-event-content");
			contentElement.classList.remove("collapse-event-content");
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
							<EventCard
								key={idx}
								event={event}
								eventSelect={eventSelect}
								isEmpty={isEmpty}
							/>
						);
					}
				})}
				<div className="event-header">
					<h2>Afternoon Block</h2>
				</div>
				{afternoonEvents.map((event, idx) => {
					if (!event.isTransition) {
						return (
							<EventCard
								key={idx}
								event={event}
								eventSelect={eventSelect}
								isEmpty={isEmpty}
							/>
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
