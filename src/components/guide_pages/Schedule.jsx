import { React, useState } from "react";
import EventCard from "./EventCard";
import { afternoonEvents, morningEvents } from "@/assets/events";

export default function Schedule({ isOpen, setIsOpen }) {
	const [fullReset, setFullReset] = useState(false);

	const eventSelect = (e, eventShown, setEventShown) => {
		const buttonElement = e.currentTarget;
		const contentElement = buttonElement.parentNode;
		const timeElement = contentElement.parentNode.querySelector(".event-time");
		buttonElement.classList.add("disable-user-click");
		if (eventShown) {
			// hide event description
			contentElement.classList.add("collapse-event-content");
			contentElement.classList.remove("expand-event-content");
			setEventShown(false);
			setTimeout(() => {
				contentElement
					.querySelector(".event-description")
					.classList.add("hide-overlay");
				setTimeout(() => {
					timeElement.classList.remove("hide-overlay");
					timeElement.classList.add("flex-column");
					buttonElement.classList.remove("background-blue5");
				}, 600);
			}, 200);
		} else {
			// show event description
			buttonElement.classList.add("background-blue5");
			timeElement.classList.remove("flex-column");
			timeElement.classList.add("hide-overlay");
			contentElement.classList.add("expand-event-content");
			contentElement.classList.remove("collapse-event-content");
			setEventShown(true);
			setTimeout(() => {
				contentElement
					.querySelector(".event-description")
					.classList.remove("hide-overlay");
			}, 500);
		}
		setTimeout(() => {
			buttonElement.classList.remove("disable-user-click");
			// console.log(buttonElement);
		}, 1000);
	};

	const handleClose = () => {
		setIsOpen(false);
		setFullReset(true);
		const eventCards = document.querySelectorAll(".event-card");
		eventCards.forEach((eventCard) => {
			eventCard.querySelector(".event-time").classList.remove("hide-overlay");
			eventCard.querySelector(".event-time").classList.add("flex-column");
			eventCard
				.querySelector(".event-label")
				.classList.remove("expand-event-content");
			eventCard
				.querySelector(".event-label")
				.classList.remove("collapse-event-content");
			eventCard
				.querySelector(".event-description")
				.classList.add("hide-overlay");
		});
	};

	return (
		<div
			id="guide-schedule"
			className={`guide-page ${isOpen ? "" : "hide-overlay"}`}
		>
			<div>
				<h1>SCRC Schedule</h1>
				<header className="event-header">
					<h2>Morning Block</h2>
				</header>
				{morningEvents.map((event, idx) => {
					if (!event.isTransition) {
						return (
							<EventCard
								key={idx}
								event={event}
								eventSelect={eventSelect}
								fullReset={fullReset}
								setFullReset={setFullReset}
							/>
						);
					}
				})}
				<header className="event-header">
					<h2>Afternoon Block</h2>
				</header>
				{afternoonEvents.map((event, idx) => {
					if (!event.isTransition) {
						return (
							<EventCard
								key={idx}
								event={event}
								eventSelect={eventSelect}
								fullReset={fullReset}
								setFullReset={setFullReset}
							/>
						);
					}
				})}
			</div>
			<button
				className="return-button"
				onClick={() => {
					handleClose();
				}}
			>
				Return to Guide
			</button>
		</div>
	);
}
