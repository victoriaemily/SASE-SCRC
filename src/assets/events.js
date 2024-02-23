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
		},
		option2: {
			name: "ACCMA Workshop",
			location: "2401",
		},
		option3: {
			name: "Graduate Student Panel",
			location: "2405",
		},
		id: "workshop-1",
		location: "Gates Ballroom, 2401, 2405",
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
		name: "Lunch Break + Boba",
		id: "lunch-break",
		location: "Gates Ballroom",
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
			location: "2401",
		},
		option2: {
			name: "Networking 101",
			location: "2405",
		},
		option3: {
			name: "Dance",
			location: "Gates Ballroom",
		},
		id: "workshop-2",
		location: "Gates Ballroom, 2401, 2405",
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
		},
		option2: {
			name: "Women in STEM Mixer",
			location: "2405",
		},
		option3: {
			name: "Speed Networking",
			location: "2401",
		},
		id: "workshop-3",
		location: "",
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
		},
		option2: {
			name: "Life After College",
			location: "2405",
		},
		option3: {
			name: "Origami",
			location: "1400",
		},
		id: "workshop-4",
		location: "Gates Ballroom, 1400, 2405",
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
		location: "Gates Ballroom",
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
		start_time: new Date("2024-03-02T16:30:00"),
		end_time: new Date("2024-03-02T19:30:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: false,
	},
];

export { morningEvents, afternoonEvents };
