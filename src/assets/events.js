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
		end_time: new Date("2024-03-02T10:20:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: false,
	},
	{
		name: "Transition",
		id: "transition",
		location: "",
		start_time: new Date("2024-03-02T10:20:00"),
		end_time: new Date("2024-03-02T10:30:00"),
		status: "",
		isTransition: true,
		isWorkshop: false,
	},
	{
		name: "Workshop I",
		option1: "Corporate Workshop #1",
		option2: "Graduate Student Panel",
		option3: "Speed Networking Event",
		id: "workshop-1",
		location: "",
		start_time: new Date("2024-03-02T10:30:00"),
		end_time: new Date("2024-03-02T11:20:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: true,
	},
	{
		name: "Transition",
		id: "transition",
		location: "",
		start_time: new Date("2024-03-02T11:20:00"),
		end_time: new Date("2024-03-02T11:30:00"),
		status: "",
		isTransition: true,
		isWorkshop: false,
	},
	{
		name: "Lunch Break + Boba",
		id: "lunch-break",
		location: "Gates Ballroom",
		start_time: new Date("2024-03-02T11:30:00"),
		end_time: new Date("2024-03-02T12:20:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: false,
	},
];

const afternoonEvents = [
	{
		name: "Workshop II",
		option1: "Corporate Workshop #2",
		option2: "Corporate Workshop #5",
		option3: "Networking 101",
		id: "workshop-2",
		location: "",
		start_time: new Date("2024-03-02T12:30:00"),
		end_time: new Date("2024-03-02T13:20:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: true,
	},
	{
		name: "Transition",
		id: "transition",
		location: "",
		start_time: new Date("2024-03-02T13:20:00"),
		end_time: new Date("2024-03-02T13:30:00"),
		status: "",
		isTransition: true,
		isWorkshop: false,
	},
	{
		name: "Workshop III",
		option1: "Corporate Workshop #3",
		option2: "Women in STEM Mixer",
		option3: "Mini Engineering Design",
		id: "workshop-3",
		location: "",
		start_time: new Date("2024-03-02T13:30:00"),
		end_time: new Date("2024-03-02T14:20:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: true,
	},
	{
		name: "Transition",
		id: "transition",
		location: "",
		start_time: new Date("2024-03-02T14:20:00"),
		end_time: new Date("2024-03-02T14:30:00"),
		status: "",
		isTransition: true,
		isWorkshop: false,
	},
	{
		name: "Workshop IV",
		option1: "Corporate Workshop #4",
		option2: "Life After College",
		option3: "Dance",
		id: "workshop-4",
		location: "",
		start_time: new Date("2024-03-02T14:20:00"),
		end_time: new Date("2024-03-02T15:30:00"),
		status: "On Time",
		isTransition: false,
		isWorkshop: true,
	},
	{
		name: "Transition",
		id: "transition",
		location: "",
		start_time: new Date("2024-03-02T15:20:00"),
		end_time: new Date("2024-03-02T15:30:00"),
		status: "",
		isTransition: true,
		isWorkshop: false,
	},
	{
		name: "Closing Ceremony",
		id: "closing-ceremony",
		location: "Gates Ballroom",
		start_time: new Date("2024-03-02T15:30:00"),
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
