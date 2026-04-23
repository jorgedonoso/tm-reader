import { seatsParser } from "./logic/parserLogic.js";
import {
  formatAndPrintSeats,
  buildAndPrintMissingTickets,
} from "./logic/printLogic.js";
import { getData } from "./logic/dataLogic";

async function run() {
  try {
    const { availabilityToday, availabilityYesterday, seats } = await getData();

    // Format seats for console output.
    const seatsPrint = [];
    const parsedSeats = seatsParser(seats);

    parsedSeats.zones.forEach((z) => {
      z.sections.forEach((s) => {
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
