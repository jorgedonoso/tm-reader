import { ResponseAvailability } from "./ResponseAvailability";
import { ResponseSeat } from "./ResponseSeat";

export type DataCache = {
  seats?: ResponseSeat;
  availabilityYesterday?: ResponseAvailability;
  availabilityToday?: ResponseAvailability;
};
