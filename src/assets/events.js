/*
Times are created with Javascript Date objects. To adjust the 
times of events, just change the poritions defined as "T__:__:__".

create date objects with: new Date("2024-03-02T00:00:00")
*/

const morningEvents = [
	{
		name: "Check In",
		id: "check-in",
		location: "Gates Ballroom (2400)",
		description:
			"Check in and boarding is available outside the Gates Ballroom (MSC 2400) starting at 8:30 AM",
		start_time: new Date("2024-03-02T08:30:00"),
		end_time: new Date("2024-03-02T09:20:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: false,
	},
	{
		name: "Opening Ceremony",
		id: "opening-ceremony",
		location: "Gates Ballroom (2400)",
		description:
			"The opening ceremony will be held at the Gates Ballroom. The event starts at 9:20 AM and runs until 10:30 AM.\nTo welcome you all to SCRC 2024, Darryl Gaines, an Associate Program Manager of the Commercial LEO Development Program at NASA Johnson Space Center, will be taking the stage as our keynote speaker alongside a performance from SASE Entropy! You can find more information about Mr. Gaines in our magazine linked in the guide.\nIt is with our best wishes that we will embark on this flight together through the day!",
		start_time: new Date("2024-03-02T09:20:00"),
		end_time: new Date("2024-03-02T10:30:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: false,
	},
	{
		name: "Transition",
		id: "transition",
		location: "",
		start_time: new Date("2024-03-02T10:30:00"),
		end_time: new Date("2024-03-02T10:40:00"),
		status: "",
		isTransition: true,
		isWorkshop: false,
	},
	{
		name: "Workshop I",
		option1: {
			name: "ACCMA Workshop",
			location: "Gates Ballroom (MSC 2400)",
			description:
				"Want to get an Internship or Job with ACCMA? Come and learn more about who they are and what they do!",
		},
		option2: {
			name: "Graduate Student Panel",
			location: "MSC 2405",
			description:
				"Come talk with TAMU graduate students for their experiences on post undergraduate life!",
		},
		option3: {
			name: "Origami",
			location: "1400",
			description:
				"Wake up for the day and let your creativity spill out a little with some arts and crafts!",
		},
		id: "workshop-1",
		location: "Gates Ballroom (2400), 2401, 2405",
		description: "The first block of workshops run from 10:40 AM to 11:30 AM.",
		start_time: new Date("2024-03-02T10:40:00"),
		end_time: new Date("2024-03-02T11:30:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: true,
	},
	{
		name: "Transition",
		id: "transition",
		location: "",
		start_time: new Date("2024-03-02T11:30:00"),
		end_time: new Date("2024-03-02T11:40:00"),
		status: "",
		isTransition: true,
		isWorkshop: false,
	},
	{
		name: "Lunch + Boba",
		id: "lunch-break",
		location: "MSC 2406",
		description:
			"Lunch will be served in room 2406 where you can enjoy catered food and boba while chatting with all other attendees!",
		start_time: new Date("2024-03-02T11:40:00"),
		end_time: new Date("2024-03-02T12:30:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: false,
	},
];

const afternoonEvents = [
	{
		name: "Workshop II",
		option1: {
			name: "Shell Workshop",
			location: "MSC 2401",
			description:
				"What comes after joining the industry? Learn from Shell how you can position yourself to climb the corporate ladder!",
		},
		option2: {
			name: "Networking 101",
			location: "MSC 2405",
			description:
				"Learn about the importance of first impressions and strategies for meeting new people!",
		},
		option3: {
			name: "Dance",
			location: "Gates Ballroom (MSC 2400)",
			description:
				"Come join TAMU's KDA (Korean Dance Association) where you will be taught to dance Twice's hit song “What is Love?”",
		},
		id: "workshop-2",
		location: "Gates Ballroom (2400), 2401, 2405",
		description: "The second block of workshops run from 12:40 PM to 1:30 PM.",
		start_time: new Date("2024-03-02T12:40:00"),
		end_time: new Date("2024-03-02T13:30:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: true,
	},
	{
		name: "Transition",
		id: "transition",
		location: "",
		start_time: new Date("2024-03-02T13:30:00"),
		end_time: new Date("2024-03-02T13:40:00"),
		status: "",
		isTransition: true,
		isWorkshop: false,
	},
	{
		name: "Workshop III",
		option1: {
			name: "GE Vernova Workshop",
			location: "Gates Ballroom (MSC 2400)",
			description:
				"Ever struggle with interviews? Join GE Vernova as they go over their tips and tricks to having a successful interview!",
		},
		option2: {
			name: "Women in STEM Mixer",
			location: "MSC 2405",
			description:
				"Have a conversation with women from our corporate sponsors to understand their experiences and impact in various industries!",
		},
		option3: {
			name: "Speed Networking",
			location: "MSC 2401",
			description:
				"Come meet new people with unique stories in a fast paced networking environment!",
		},
		id: "workshop-3",
		location: "Gates Ballroom (2400), 2401, 2405",
		description: "The third block of workshops run from 1:40 PM to 2:30 PM.",
		start_time: new Date("2024-03-02T13:40:00"),
		end_time: new Date("2024-03-02T14:30:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: true,
	},
	{
		name: "Transition",
		id: "transition",
		location: "",
		start_time: new Date("2024-03-02T14:30:00"),
		end_time: new Date("2024-03-02T14:40:00"),
		status: "",
		isTransition: true,
		isWorkshop: false,
	},
	{
		name: "Workshop IV",
		option1: {
			name: "NASA Workshop",
			location: "Gates Ballroom (MSC 2400)",
			description:
				"Join NASA as they discuss many aspects of industry life including work life balance, finances, health, and other general advice!",
		},
		option2: {
			name: "TI Workshop",
			location: "MSC 2401",
			description:
				"Join Texas Instruments to learn the ins and outs of a perfect resume for standing out in job applications!",
		},
		option3: {
			name: "Life After College",
			location: "MSC 2405",
			description:
				"Ever wonder what life after college is like? Join SASE Alumni as they discuss their post-college experiences",
		},
		id: "workshop-4",
		location: "Gates Ballroom (2400), 1400, 2405",
		description: "The fourth block of workshops run from 2:40 PM to 3:30 PM.",
		start_time: new Date("2024-03-02T14:40:00"),
		end_time: new Date("2024-03-02T15:30:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: true,
	},
	{
		name: "Transition",
		id: "transition",
		location: "",
		start_time: new Date("2024-03-02T15:30:00"),
		end_time: new Date("2024-03-02T15:40:00"),
		status: "",
		isTransition: true,
		isWorkshop: false,
	},
	{
		name: "Closing Ceremony",
		id: "closing-ceremony",
		location: "Gates Ballroom (2400)",
		description:
			"The closing ceremony will be held in Gates Ballroom (MSC 2400). The event starts at 3:40 PM and runs until 4:20 PM.\nAs we taxi back into the gate, Yash Gidh, the National President of Shell Asia Pacific Employee Network Group, will be speaking to us all give us some final words to remember as we continue to advance in our careers. You can read more about who he is and his distinct accomplishments in our magazine linked in the guide. Additionally, we would like to thank everyone for making such a successful event to be possible.\nThank you for the time you spent with us, and we hope that your journey was both comfortable and rewarding.",
		start_time: new Date("2024-03-02T15:40:00"),
		end_time: new Date("2024-03-02T16:20:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: false,
	},
	{
		name: "Transition",
		id: "transition",
		location: "",
		start_time: new Date("2024-03-02T16:20:00"),
		end_time: new Date("2024-03-02T16:30:00"),
		status: "",
		isTransition: true,
		isWorkshop: false,
	},
	{
		name: "Career Fair",
		id: "career-fair",
		location: "MSC 2406",
		description:
			"In , we will be holding a career fair in which everyone will have the unique opportunity to speak directly with company representatives of our sponsors and attendees.",
		start_time: new Date("2024-03-02T16:30:00"),
		end_time: new Date("2024-03-02T19:30:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: false,
	},
];

export { morningEvents, afternoonEvents };
