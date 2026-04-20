import { availableSeatsParser, mapSeats } from "./parserLogic.js";
import { readJsonFile } from "./helpers.js";

// Format and console output sold tickets.
// TODO: Elevate data.
export async function buildAndPrintMissingTickets() {
  const seatsRaw = await readJsonFile("./data/seats.json");
  const availabilityYesterday = await readJsonFile(
    "./data/availability-yesterday.json",
  );
  const availabilityToday = await readJsonFile(
    "./data/availability-today.json",
  );
  const rawYesterday = availableSeatsParser(availabilityYesterday);
  const rawToday = availableSeatsParser(availabilityToday);
  const todaySet = new Set(rawToday);
  const missing = rawYesterday.filter((at) => !todaySet.has(at));
  const mappedSeats = mapSeats(seatsRaw);
  const missingSeatDetails = [];

  missing.forEach((m) => {
    missingSeatDetails.push(mappedSeats.find((ms) => ms.id == m));
  });

  console.log("Tickets sold between datasets");
  console.table(missingSeatDetails);
}

// Format and console output seats.
export function formatAndPrintSeats(data, detail) {
  const seats = availableSeatsParser(data);
  const date = new Date(data.meta.modified);
  const shortDate = date.toLocaleDateString("en-US");

  console.log("Tickets Available", detail);
  console.log("Date ", shortDate);
  console.log("Total: ", seats.length);
}
