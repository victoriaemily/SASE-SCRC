/*
Times are created with Javascript Date objects. To adjust the 
times of events, just change the poritions defined as "T__:__:__".

create date objects with: new Date("2024-03-02T00:00:00")
*/

const morningEvents = [
	{
		name: "Check In",
		id: "check-in",
		location: "Gates Ballroom",
		description:
			"Check in is available outside the Gates Ballroom starting at 8:30 AM until 9:30 AM.",
		start_time: new Date("2024-03-02T08:30:00"),
		end_time: new Date("2024-03-02T09:30:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: false,
	},
	{
		name: "Opening Ceremony",
		id: "opening-ceremony",
		location: "Gates Ballroom",
		description:
			"The opening ceremony will be held at the Gates Ballroom. The event starts at 9:30 AM and runs until 10:30 AM.\nTo welcome you all to SCRC 2024, we have two keynote speakers, Darryl Gaines of NASA and Yash Gidh of Shell, taking the stage. You can find more information about the speakers in our magazine.\nIt is with our best wishes that we will embark on this flight together through the day!",
		start_time: new Date("2024-03-02T09:30:00"),
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
			name: "TI Workshop",
			location: "Gates Ballroom",
			description: "Join Texas Instruments for their workshop!",
		},
		option2: {
			name: "ACCMA Workshop",
			location: "Room 2401",
			description:
				"Join Army Civilian Career Management Activity for their workshop!",
		},
		option3: {
			name: "Graduate Student Panel",
			location: "Room 2405",
			description:
				"Come talk with TAMU graduate students for their experiences on post undergraduate life!",
		},
		id: "workshop-1",
		location: "Gates Ballroom, 2401, 2405",
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
		location: "2406",
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
			location: "Room 2401",
			description: "Join Shell for their workshop!",
		},
		option2: {
			name: "Networking 101",
			location: "Room 2405",
			description:
				"Learn about the importance of first impressions and strategies for meeting new people!",
		},
		option3: {
			name: "Dance",
			location: "Gates Ballroom",
			description:
				"Come have a break from the professional setting and learn a dance with us! ^_^",
		},
		id: "workshop-2",
		location: "Gates Ballroom, 2401, 2405",
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
			name: "GE Workshop",
			location: "Gates Ballroom",
			description: "Join GE Vernova for their workshop!",
		},
		option2: {
			name: "Women in STEM Mixer",
			location: "Room 2405",
			description:
				"Learn more about the importance of women in STEM while meeting others with similar goals!",
		},
		option3: {
			name: "Speed Networking",
			location: "Room 2401",
			description:
				"Come meet new people with unique stories in our professional rendition of speed dating!",
		},
		id: "workshop-3",
		location: "Gates Ballroom, 2401, 2405",
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
			location: "Gates Ballroom",
			description: "Join NASA for their workshop!",
		},
		option2: {
			name: "Life After College",
			location: "Room 2405",
			description:
				"Join SASE alumni to find out more about what their lives are like after graduation!",
		},
		option3: {
			name: "Origami",
			location: "Room 1400",
			description:
				"Wind down and let your creativity spill out a little with some arts and crafts!",
		},
		id: "workshop-4",
		location: "Gates Ballroom, 1400, 2405",
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
		location: "2400",
		description:
			"The closing ceremony will be held in room 2400. The event starts at 3:40 PM and runs until 4:20 PM.\nCome gather together as we thank everyone for allowing such a successful event to be possible.\nWe will provide you with reminders and any important and final remarks before we end off our journey.",
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
		location: "Stark Galleries",
		description:
			"In the Stark Galleries, we will be holding a career fair in which everyone will have the unique opportunity to speak directly with company representatives of our sponsors and attendees.",
		start_time: new Date("2024-03-02T16:30:00"),
		end_time: new Date("2024-03-02T19:30:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: false,
	},
];

export { morningEvents, afternoonEvents };
