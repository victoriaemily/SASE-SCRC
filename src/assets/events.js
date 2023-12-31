/*
Times are created with Javascript Date objects. To adjust the 
times of events, just change the poritions defined as "T__:__:__".

create date objects with: new Date("2024-03-02T00:00:00")
*/

const morningEvents = [
  {
    name: "Check In",
    id: "check-in",
    location: "TBA",
    start_time: new Date("2024-03-02T08:30:00"),
    end_time: new Date("2024-03-02T09:30:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Opening Ceremony",
    id: "opening-ceremony",
    location: "TBA",
    start_time: new Date("2024-03-02T09:30:00"),
    end_time: new Date("2024-03-02T10:20:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Transition",
    id: "transition",
    location: "",
    start_time: new Date("2024-03-02T10:20:00"),
    end_time: new Date("2024-03-02T10:30:00"),
    status: "",
    isTransition: true,
  },
  {
    name: "Workshop I",
    id: "workshop-1",
    location: "TBA",
    start_time: new Date("2024-03-02T10:30:00"),
    end_time: new Date("2024-03-02T11:20:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Transition",
    id: "transition",
    location: "",
    start_time: new Date("2024-03-02T11:20:00"),
    end_time: new Date("2024-03-02T11:30:00"),
    status: "",
    isTransition: true,
  },
  {
    name: "Lunch Break",
    id: "lunch-break",
    location: "TBA",
    start_time: new Date("2024-03-02T11:30:00"),
    end_time: new Date("2024-03-02T12:20:00"),
    status: "On Time",
    isTransition: false,
  },
];

const afternoonEvents = [
  {
    name: "Workshop II",
    id: "workshop-2",
    location: "TBA",
    start_time: new Date("2024-03-02T12:30:00"),
    end_time: new Date("2024-03-02T13:20:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Transition",
    id: "transition",
    location: "",
    start_time: new Date("2024-03-02T13:20:00"),
    end_time: new Date("2024-03-02T13:30:00"),
    status: "",
    isTransition: true,
  },
  {
    name: "Workshop III",
    id: "workshop-3",
    location: "TBA",
    start_time: new Date("2024-03-02T13:30:00"),
    end_time: new Date("2024-03-02T14:20:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Transition",
    id: "transition",
    location: "",
    start_time: new Date("2024-03-02T14:30:00"),
    end_time: new Date("2024-03-02T14:20:00"),
    status: "",
    isTransition: true,
  },
  {
    name: "Workshop IV",
    id: "workshop-4",
    location: "TBA",
    start_time: new Date("2024-03-02T14:30:00"),
    end_time: new Date("2024-03-02T15:20:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Transition",
    id: "transition",
    location: "",
    start_time: new Date("2024-03-02T15:20:00"),
    end_time: new Date("2024-03-02T15:30:00"),
    status: "",
    isTransition: true,
  },
  {
    name: "Closing Ceremony",
    id: "closing-ceremony",
    location: "TBA",
    start_time: new Date("2024-03-02T15:30:00"),
    end_time: new Date("2024-03-02T16:30:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Career Fair",
    id: "career-fair",
    location: "TBA",
    start_time: new Date("2024-03-02T16:30:00"),
    end_time: new Date("2024-03-02T19:00:00"),
    status: "On Time",
    isTransition: false,
  },
];

export { morningEvents, afternoonEvents };
