import { React, useEffect } from "react";
import { EventCard } from "@/components";
import { afternoonEvents, morningEvents } from "@/assets/events";

export default function GuideSchedule() {
	useEffect(() => {
		document.body.style.backgroundColor = "rgb(var(--blue-guide))";

		return () => {
			document.body.style.backgroundColor = "white";
		};
	}, []);

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
		}, 750);
	};

	return (
		<div id="guide-schedule" className="guide-page">
			<div>
				<a href="/guide" className="return-button">
					{/* <label>
						Return
						<br />
						Home
					</label> */}
					<h1>SCRC Schedule</h1>
					{/* <label>
						Return
						<br />
						Home
					</label> */}
				</a>
				<header className="event-header">
					<h2>Morning Block</h2>
				</header>
				{morningEvents.map((event, idx) => {
					if (!event.isTransition) {
						return (
							<EventCard key={idx} event={event} eventSelect={eventSelect} />
						);
					}
				})}
				<header className="event-header">
					<h2>Afternoon Block</h2>
				</header>
				{afternoonEvents.map((event, idx) => {
					if (!event.isTransition) {
						return (
							<EventCard key={idx} event={event} eventSelect={eventSelect} />
						);
					}
				})}
			</div>
		</div>
	);
}
