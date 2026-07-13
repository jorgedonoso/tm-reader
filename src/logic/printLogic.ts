import { availableSeatsParser, mapSeats } from "./parserLogic";
import { getData } from "./dataLogic";
import { ResponseAvailability } from "../types/ResponseAvailability";
import { VenueRow } from "../types/VenueRow";

// Format and console output sold tickets.
export async function buildAndPrintMissingTickets() {
  const { availabilityToday, availabilityYesterday, seats } = await getData();

  const rawYesterday = availableSeatsParser(availabilityYesterday);
  const rawToday = availableSeatsParser(availabilityToday);
  const mappedSeats = mapSeats(seats);

  // Calculate and populate missing seats.
  const todaySet = new Set(rawToday);
  const missing = rawYesterday.filter((at: string) => !todaySet.has(at));

  const missingSeatDetails: VenueRow[] = [];

  missing.forEach((m: string) => {
    const found = mappedSeats.find((ms) => ms.id == m);
    if (found) {
      missingSeatDetails.push(found);
    }
  });

  // Show.
  console.log("Tickets sold between datasets");
  console.table(missingSeatDetails);
}

// Format and console output seats.
export function formatAndPrintSeats(
  data: ResponseAvailability,
  detail: string,
) {
  const seats = availableSeatsParser(data);
  const date = new Date(data.meta.modified);
  const shortDate = date.toLocaleDateString("en-US");

  // Show.
  console.log("Tickets Available", detail);
  console.log("Date ", shortDate);
  console.log("Total: ", seats.length);
}
