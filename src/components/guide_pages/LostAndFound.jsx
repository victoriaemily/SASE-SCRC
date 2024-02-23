import React from "react";

export default function LostAndFound({ isOpen, setIsOpen }) {
	return (
		<div className={`guide-page ${isOpen ? "" : "hide-overlay"}`}>
			<button
				onClick={() => {
					setIsOpen(false);
				}}
			>
				Lost & Found
			</button>
		</div>
	);
}
