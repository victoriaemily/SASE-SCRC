import { React, useEffect } from "react";

export default function Guide() {
	useEffect(() => {
		document.body.style.backgroundColor = "rgb(var(--blue-guide))";

		return () => {
			document.body.style.backgroundColor = "white";
		};
	}, []);

	return (
		<div className="guide-body">
			<header id="guide-header">
				<h1>SCRC Guide</h1>
			</header>
			<nav id="guide-menu">
				<a href="/guide/schedule">Schedule</a>
				<a href="/guide/maps">Maps</a>
				<a href="https://drive.google.com/file/d/1FSE2I9_FGfjUDd3J_K4N3lj_rMLiHqPN/view?usp=sharing" target="_blank">
					Magazine
				</a>
				<a href="https://forms.gle/Qdpc8dzyr8uDbPCa8" target="_blank">
					Lost & Found
				</a>
				<a href="/guide/socials">Socials</a>
			</nav>
		</div>
	);
}
