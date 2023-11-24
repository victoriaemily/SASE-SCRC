/*
Times are created with Javascript Date objects. To adjust the 
times of events, just change the poritions defined as "T__:__:__".
*/

const morningEvents = [
  {
    name: "Registration",
    location: "MSC X",
    start_time: new Date("2024-03-02T09:00:00"),
    end_time: new Date("2024-03-02T09:45:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Transition",
    location: "",
    start_time: new Date("2024-03-02T09:45:00"),
    end_time: new Date("2024-03-02T10:00:00"),
    status: "",
    isTransition: true,
  },
  {
    name: "Opening Ceremony",
    location: "MSC X",
    start_time: new Date("2024-03-02T10:00:00"),
    end_time: new Date("2024-03-02T10:45:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Transition",
    location: "",
    start_time: new Date("2024-03-02T10:45:00"),
    end_time: new Date("2024-03-02T11:00:00"),
    status: "",
    isTransition: true,
  },
  {
    name: "Workshop I",
    location: "MSC X",
    start_time: new Date("2024-03-02T11:00:00"),
    end_time: new Date("2024-03-02T11:40:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Transition",
    location: "",
    start_time: new Date("2024-03-02T11:40:00"),
    end_time: new Date("2024-03-02T11:50:00"),
    status: "",
    isTransition: true,
  },
  {
    name: "Workshop II",
    location: "MSC X",
    start_time: new Date("2024-03-02T11:50:00"),
    end_time: new Date("2024-03-02T12:30:00"),
    status: "On Time",
    isTransition: false,
  },
];

const afternoonEvents = [
  {
    name: "Lunch Break",
    location: "MSC X",
    start_time: new Date("2024-03-02T12:30:00"),
    end_time: new Date("2024-03-02T13:45:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Networking Session",
    location: "MSC X",
    start_time: new Date("2024-03-02T13:45:00"),
    end_time: new Date("2024-03-02T14:45:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Transition",
    location: "",
    start_time: new Date("2024-03-02T14:45:00"),
    end_time: new Date("2024-03-02T15:00:00"),
    status: "",
    isTransition: true,
  },
  {
    name: "Workshop III + Professor Panel",
    location: "MSC X",
    start_time: new Date("2024-03-02T15:00:00"),
    end_time: new Date("2024-03-02T15:45:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Transition",
    location: "",
    start_time: new Date("2024-03-02T15:45:00"),
    end_time: new Date("2024-03-02T16:00:00"),
    status: "",
    isTransition: true,
  },
  {
    name: "Closing Ceremony",
    location: "MSC X",
    start_time: new Date("2024-03-02T16:00:00"),
    end_time: new Date("2024-03-02T16:30:00"),
    status: "On Time",
    isTransition: false,
  },
  {
    name: "Career Fair",
    location: "MSC X",
    start_time: new Date("2024-03-02T16:45:00"),
    end_time: new Date("2024-03-02T19:15:00"),
    status: "On Time",
    isTransition: false,
  },
];

export { morningEvents, afternoonEvents };
