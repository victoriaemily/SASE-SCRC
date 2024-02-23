import { React, useEffect, useState } from "react";
import { LostAndFound, Magazine, Maps, Schedule, Socials } from "@/components";

export default function Guide() {
	const [isScheduleOpen, setIsScheduleOpen] = useState(false);
	const [isMapsOpen, setIsMapsOpen] = useState(false);
	const [isMagazineOpen, setIsMagazineOpen] = useState(false);
	const [isLostAndFoundOpen, setIsLostAndFoundOpen] = useState(false);
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
						setIsMagazineOpen(false);
						setIsLostAndFoundOpen(false);
						setIsSocialsOpen(false);

						setIsScheduleOpen(true);
					}}
				>
					Schedule
				</button>
				<button
					onClick={() => {
						setIsScheduleOpen(false);
						setIsMagazineOpen(false);
						setIsLostAndFoundOpen(false);
						setIsSocialsOpen(false);

						setIsMapsOpen(true);
					}}
				>
					Maps
				</button>
				<button
					onClick={() => {
						setIsScheduleOpen(false);
						setIsMapsOpen(false);
						setIsLostAndFoundOpen(false);
						setIsSocialsOpen(false);

						setIsMagazineOpen(true);
					}}
				>
					Magazine
				</button>
				<button
					onClick={() => {
						setIsScheduleOpen(false);
						setIsMapsOpen(false);
						setIsMagazineOpen(false);
						setIsSocialsOpen(false);

						setIsLostAndFoundOpen(true);
					}}
				>
					Lost & Found
				</button>
				<button
					onClick={() => {
						setIsScheduleOpen(false);
						setIsMapsOpen(false);
						setIsMagazineOpen(false);
						setIsLostAndFoundOpen(false);

						setIsSocialsOpen(true);
					}}
				>
					Socials
				</button>
			</div>
			<Schedule isOpen={isScheduleOpen} setIsOpen={setIsScheduleOpen} />
			<Maps isOpen={isMapsOpen} setIsOpen={setIsMapsOpen} />
			<Magazine isOpen={isMagazineOpen} setIsOpen={setIsMagazineOpen} />
			<LostAndFound
				isOpen={isLostAndFoundOpen}
				setIsOpen={setIsLostAndFoundOpen}
			/>
			<Socials isOpen={isSocialsOpen} setIsOpen={setIsSocialsOpen} />
		</div>
	);
}
