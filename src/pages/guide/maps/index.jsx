import { React, useEffect } from "react";

export default function Maps() {
	useEffect(() => {
		document.body.style.backgroundColor = "rgb(var(--blue-guide))";

		return () => {
			document.body.style.backgroundColor = "white";
		};
	}, []);

	return (
		<div className="guide-page">
			<a href="/guide" className="return-button">
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
			</a>
		</div>
	);
}
