import React from "react";

export default function Schedule({ isOpen, setIsOpen }) {
	return (
		<div className={`guide-page ${isOpen ? "" : "hide-overlay"}`}>
			<h1>SCRC Schedule</h1>
			<button
				onClick={() => {
					setIsOpen(false);
				}}
			>
				Schedule
			</button>
		</div>
	);
}
