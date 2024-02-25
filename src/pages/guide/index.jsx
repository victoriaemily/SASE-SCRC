import { React, useEffect, useState } from "react";
import { Maps, Schedule, Socials } from "@/components";

export default function Guide() {
	const [isScheduleOpen, setIsScheduleOpen] = useState(false);
	const [isMapsOpen, setIsMapsOpen] = useState(false);
	const [isSocialsOpen, setIsSocialsOpen] = useState(false);

	useEffect(() => {
		document.body.style.backgroundColor = "rgb(var(--blue-guide))";

		return () => {
			document.body.style.backgroundColor = "white";
		};
	}, []);

	return (
		<div id="guide-body">
			<div id="guide-header">
				<h1>SCRC Guide</h1>
			</div>
			<div id="guide-menu">
				<button
					onClick={() => {
						setIsMapsOpen(false);
						setIsSocialsOpen(false);

						setIsScheduleOpen(true);
					}}
				>
					Schedule
				</button>
				<button
					onClick={() => {
						setIsScheduleOpen(false);
						setIsSocialsOpen(false);

						setIsMapsOpen(true);
					}}
				>
					Maps
				</button>
				<a href="about:blank" target="_blank">
					Magazine
				</a>
				<a href="https://forms.gle/Qdpc8dzyr8uDbPCa8" target="_blank">
					Lost & Found
				</a>
				<button
					onClick={() => {
						setIsScheduleOpen(false);
						setIsMapsOpen(false);

						setIsSocialsOpen(true);
					}}
				>
					Socials
				</button>
			</div>
			<Schedule isOpen={isScheduleOpen} setIsOpen={setIsScheduleOpen} />
			<Maps isOpen={isMapsOpen} setIsOpen={setIsMapsOpen} />
			<Socials isOpen={isSocialsOpen} setIsOpen={setIsSocialsOpen} />
		</div>
	);
}
