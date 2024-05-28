const STATUS_APPT = { id: 1, name: "Appt Required", color: "blue.300" };
const STATUS_DELAY = { id: 2, name: "Slight Delay", color: "yellow.400" };
const STATUS_BEHIND = { id: 3, name: "Behind", color: "pink.300" };
const STATUS_SCHEDULE = { id: 4, name: "On Schedule", color: "green.300" };
const STATUS_ISSUE = { id: 5, name: "Major Issue", color: "orange.400" };

export const STATUSES = [
  STATUS_APPT,
  STATUS_DELAY,
  STATUS_BEHIND,
  STATUS_SCHEDULE,
  STATUS_ISSUE
];

const DATA = [
  {
    task: "Add a New Feature!",
    status: STATUS_APPT,
    due: new Date("2023/10/11"),
    ready: new Date("2023/10/15"),
    notes: "New Fridge",
  },
  {
    task: "Write Integration Tests",
    status: STATUS_DELAY,
    due: null,
    ready: null,
    notes: "Screen Door",
  },
  {
    task: "Add Instagram Integration",
    status: STATUS_SCHEDULE,
    due: null,
    ready: null,
    notes: "Roofing Works",
  },
  {
    task: "Cleanup Database",
    status: null,
    due: new Date("2023/02/15"),
    ready: null,
    notes: "Carpets",
  },
  {
    task: "Refactor API Endpoints",
    status: STATUS_BEHIND,
    due: null,
    ready: null,
    notes: "New Stove",
  },
  {
    task: "Add Documentation to API",
    status: null,
    due: new Date("2023/09/12"),
    ready: null,
    notes: "Paint Kitchen",
  },
  {
    task: "Update NPM Packages",
    status: STATUS_DELAY,
    due: null,
    ready: null,
    notes: "Rent Overdue",
  },
];

export default DATA;
