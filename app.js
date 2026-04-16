import { seatsParser, readJsonFile, availableSeatsParser } from "./helpers.js";

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

    // Format seats available yesterday for console output.
    const yesterdayPrint = availableSeatsParser(availabilityYesterday);
    console.log("Tickets Available Yesterday");
    console.log("Total: ", yesterdayPrint.length);
    console.log(yesterdayPrint);

    // Format seats available today for console output.
    const todayPrint = availableSeatsParser(availabilityToday);
    console.log("Tickets Available Today");
    console.log("Total: ", todayPrint.length);
    console.log(todayPrint);
  } catch (err) {
    console.error("Error reading files:", err);
  }
}

run();
