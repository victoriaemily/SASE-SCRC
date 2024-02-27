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
				<h1>Back to Guide</h1>
			</a>
		</div>
	);
}
