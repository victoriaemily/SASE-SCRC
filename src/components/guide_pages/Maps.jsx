import React from "react";

export default function Maps({ isOpen, setIsOpen }) {
	return (
		<div className={`guide-page ${isOpen ? "" : "hide-overlay"}`}>
			<button
				onClick={() => {
					setIsOpen(false);
				}}
			>
				Maps
			</button>
		</div>
	);
}
