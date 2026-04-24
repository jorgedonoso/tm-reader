import { seatsParser } from "./logic/parserLogic";
import {
  formatAndPrintSeats,
  buildAndPrintMissingTickets,
} from "./logic/printLogic";
import { getData } from "./logic/dataLogic";
import { VenueRow } from "./types/VenueRow";
import { VenueZone } from "./types/VenueZone";
import { VenueSection } from "./types/VenueSection";

async function run() {
  try {
    const { availabilityToday, availabilityYesterday, seats } = await getData();

    // Format seats for console output.
    const seatsPrint: VenueRow[] = [];
    const parsedSeats = seatsParser(seats);

    parsedSeats.zones.forEach((z: VenueZone) => {
      z.sections.forEach((s: VenueSection) => {
        seatsPrint.push({
          zone: z.name,
          section: s.name,
          row: s.rows.sort().join(","),
        });
      });
    });

    seatsPrint.sort((a, b) => a.zone.localeCompare(b.zone));

    console.table("Seats by zone, section, and row");
    console.table(seatsPrint);

    // Print old data.
    formatAndPrintSeats(availabilityYesterday, "Yesterday");

    // Print new data.
    formatAndPrintSeats(availabilityToday, "Today");

    // Missing tickets.
    buildAndPrintMissingTickets();
  } catch (err) {
    console.error("Error reading files:", err);
  }
}

run();
