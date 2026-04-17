import { availableSeatsParser } from "./parserLogic.js";

// Format and console output seats.
export function formatAndPrintSeats(data, detail) {
  const seats = availableSeatsParser(data);
  const date = new Date(data.meta.modified);
  const shortDate = date.toLocaleDateString("en-US");

  console.log("Tickets Available ", detail);
  console.log("Date ", shortDate);
  console.log("Total: ", seats.length);
  console.log(seats);
}
