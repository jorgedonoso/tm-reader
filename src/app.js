import { seatsParser } from "./logic/parserLogic.js";
import { readJsonFile } from "./logic/helpers.js";
import { formatAndPrintSeats } from "./logic/printLogic.js";

async function run() {
  try {
    const seatsRaw = await readJsonFile("./data/seats.json");
    const availabilityYesterday = await readJsonFile(
      "./data/availability-yesterday.json",
    );
    const availabilityToday = await readJsonFile(
      "./data/availability-today.json",
    );

    // Format seats for console output.
    const seatsPrint = [];
    const seats = seatsParser(seatsRaw);

    seats.zones.forEach((z) => {
      z.sections.forEach((s) => {
        seatsPrint.push({
          zone: z.name,
          section: s.name,
          row: s.rows.sort().join(","),
        });
      });
    });

    seatsPrint.sort((a, b) => a.zone.localeCompare(b.zone));
    console.table(seatsPrint);

    // Print old data.
    formatAndPrintSeats(availabilityYesterday, "Yesterday");

    // Print new data.
    formatAndPrintSeats(availabilityToday, "Today");
  } catch (err) {
    console.error("Error reading files:", err);
  }
}

run();
