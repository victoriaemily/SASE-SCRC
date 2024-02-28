import { React, useEffect } from "react";

export default function Maps() {
	useEffect(() => {
		document.body.style.backgroundColor = "rgb(var(--blue-guide))";

		return () => {
			document.body.style.backgroundColor = "white";
		};
	}, []);

	return (
		<div id="guide-map" className="guide-page">
			<a href="/guide" className="return-button">
				<h1>Back to Guide</h1>
			</a>
			<div className="image-container">
				<div>
					<h2>1st Floor</h2>
					<div
						role="img"
						aria-label="The first level floor map of Memorial Student Center (MSC)"
						className="msc-map msc-floor1"
					></div>
					<a href="/static/maps/msc-floor1.png" target="_blank">
						Open Full Image in New Page
					</a>
				</div>
				<div>
					<h2>2nd Floor</h2>
					<div
						role="img"
						aria-label="The second level floor map of Memorial Student Center (MSC)"
						className="msc-map msc-floor2"
					></div>
					<a href="/static/maps/msc-floor1.png" target="_blank">
						Open Full Image in New Page
					</a>
				</div>
			</div>
		</div>
	);
}
