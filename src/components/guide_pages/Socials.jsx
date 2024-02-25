import React from "react";

export default function Socials({ isOpen, setIsOpen }) {
	return (
		<div className={`guide-page ${isOpen ? "" : "hide-overlay"}`}>
			<button
				onClick={() => {
					setIsOpen(false);
				}}
			>
				Socials
			</button>
		</div>
	);
}
