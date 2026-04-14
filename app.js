import fs from "fs/promises";

async function run() {
  try {
    const [seatDataRaw, availabilityDataRaw] = await Promise.all([
      fs.readFile("./data/seats.json", "utf-8"),
      fs.readFile("./data/availability.json", "utf-8"),
    ]);

    const seatData = JSON.parse(seatDataRaw);
    const availabilityData = JSON.parse(availabilityDataRaw);

    console.log(seatData, availabilityData);
  } catch (err) {
    console.error("Error reading files:", err);
  }
}

run();
