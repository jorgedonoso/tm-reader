import { DataCache } from "../types/DataCache.js";
import { readJsonFile } from "./helpers";

const cache: DataCache = {};

export async function getData() {
  if (!cache.seats) {
    const [seatsRaw, availabilityYesterday, availabilityToday] =
      await Promise.all([
        readJsonFile("./data/seats.json"),
        readJsonFile("./data/availability-yesterday.json"),
        readJsonFile("./data/availability-today.json"),
      ]);

    cache.seats = seatsRaw;
    cache.availabilityYesterday = availabilityYesterday;
    cache.availabilityToday = availabilityToday;
  }

  return cache;
}
