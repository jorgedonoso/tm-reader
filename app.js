import fs from "fs/promises";
import { seatsParser } from "./helpers.js";

async function run() {
  try {
    const [seatDataRaw, availabilityDataRaw] = await Promise.all([
      fs.readFile("./data/seats.json", "utf-8"),
      fs.readFile("./data/availability.json", "utf-8"),
    ]);

    // Format seats for console output.
    const seats = seatsParser(JSON.parse(seatDataRaw));
    const seatsPrint = [];

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
  } catch (err) {
    console.error("Error reading files:", err);
  }
}

run();
