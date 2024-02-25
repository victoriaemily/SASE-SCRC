import React from "react";

export default function Magazine({ isOpen, setIsOpen }) {
	return (
		<div className={`guide-page ${isOpen ? "" : "hide-overlay"}`}>
			<button
				onClick={() => {
					setIsOpen(false);
				}}
			>
				Magazine
			</button>
		</div>
	);
}
