import React from "react";

export default function Maps({ isOpen, setIsOpen }) {
	return (
		<div className={`guide-page ${isOpen ? "" : "hide-overlay"}`}>
			<button
				className="return-button"
				onClick={() => {
					setIsOpen(false);
				}}
			>
				{/* <label>
					Return
					<br />
					Home
				</label> */}
				<h1>Maps</h1>
				{/* <label>
					Return
					<br />
					Home
				</label> */}
			</button>
		</div>
	);
}
