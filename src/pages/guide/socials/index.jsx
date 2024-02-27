import { React, useEffect } from "react";

export default function Socials() {
	useEffect(() => {
		document.body.style.backgroundColor = "rgb(var(--blue-guide))";

		return () => {
			document.body.style.backgroundColor = "white";
		};
	}, []);

	return (
		<div id="guide-socials" className="guide-page">
			<a href="/guide" className="return-button">
				{/* <label>
					Return
					<br />
					Home
				</label> */}
				<h1>Socials</h1>
				{/* <label>
					Return
					<br />
					Home
				</label> */}
			</a>
			<ul className="links-container">
				<li>
					<a
						className="link discord-link"
						target="_blank"
						href="https://discord.gg/sjZReYXgTj"
					>
						<div
							role="img"
							aria-label="Discord icon"
							className="social-icon discord-icon"
						></div>
						<label>Discord</label>
					</a>
				</li>
				<li>
					<a
						className="link instagram-link"
						target="_blank"
						href="https://instagram.com/sasetamu"
					>
						<div
							role="img"
							aria-label="Instagram icon"
							className="social-icon instagram-icon"
						></div>
						<label>Instagram</label>
					</a>
				</li>
				<li>
					<a
						className="link gmail-link"
						target="_blank"
						href="mailto:sasetamu@gmail.com"
					>
						<div
							role="img"
							aria-label="Gmail icon"
							className="social-icon gmail-icon"
						></div>
						<label>Email</label>
					</a>
				</li>
				<li>
					<a
						className="link scrc-link"
						target="_blank"
						href="https://scrc.sasetamu.org"
					>
						<div
							role="img"
							aria-label="South Central Regional Conference logo"
							className="social-icon scrc-blue-icon"
						></div>
						<label>SCRC Homepage</label>
					</a>
				</li>
				<li>
					<a
						className="link linktree-link"
						target="_blank"
						href="https://linktr.ee/tamusase"
					>
						<div
							role="img"
							aria-label="Linktree icon"
							className="social-icon linktree-icon"
						></div>
						<label>Linktree</label>
					</a>
				</li>
			</ul>
		</div>
	);
}
