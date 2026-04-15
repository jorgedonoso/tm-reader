import fs from "fs/promises";
import { seatsParser, availableSeatsParser } from "./helpers.js";

async function run() {
  try {
    const [
      seatDataRaw,
      availabilityYesterdayDataRaw,
      availabilityTodayDataRaw,
    ] = await Promise.all([
      fs.readFile("./data/seats.json", "utf-8"),
      fs.readFile("./data/availability-yesterday.json", "utf-8"),
      fs.readFile("./data/availability-today.json", "utf-8"),
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

    // Format seats available yesterday for console output.
    const yesterdayPrint = availableSeatsParser(
      JSON.parse(availabilityYesterdayDataRaw),
    );
    console.log("Tickets Available Yesterday");
    console.log("Total: ", yesterdayPrint.length);
    console.log(yesterdayPrint);

    // Format seats available today for console output.
    const todayPrint = availableSeatsParser(
      JSON.parse(availabilityTodayDataRaw),
    );
    console.log("Tickets Available Today");
    console.log("Total: ", todayPrint.length);
    console.log(todayPrint);
  } catch (err) {
    console.error("Error reading files:", err);
  }
}

run();
