import { availableSeatsParser, mapSeats } from "./parserLogic.js";
import { getData } from "./dataLogic";

// Format and console output sold tickets.
export async function buildAndPrintMissingTickets() {
  const { availabilityToday, availabilityYesterday, seats } = await getData();

  const rawYesterday = availableSeatsParser(availabilityYesterday);
  const rawToday = availableSeatsParser(availabilityToday);
  const mappedSeats = mapSeats(seats);

  // Calculate and populate missing seats.
  const todaySet = new Set(rawToday);
  const missing = rawYesterday.filter((at) => !todaySet.has(at));
  const missingSeatDetails = [];

  missing.forEach((m) => {
    missingSeatDetails.push(mappedSeats.find((ms) => ms.id == m));
  });

  // Show.
  console.log("Tickets sold between datasets");
  console.table(missingSeatDetails);
}

// Format and console output seats.
export function formatAndPrintSeats(data, detail) {
  const seats = availableSeatsParser(data);
  const date = new Date(data.meta.modified);
  const shortDate = date.toLocaleDateString("en-US");

  // Show.
  console.log("Tickets Available", detail);
  console.log("Date ", shortDate);
  console.log("Total: ", seats.length);
}
