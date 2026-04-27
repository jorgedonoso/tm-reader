import { DataCache } from "../types/DataCache";
import { readJsonFile } from "./helpers";

let cachePromise: Promise<DataCache> | null = null;

export function getData(): Promise<DataCache> {
  if (!cachePromise) {
    cachePromise = fetchData();
  }

  return cachePromise;
}

async function fetchData(): Promise<DataCache> {
  const [seats, availabilityToday, availabilityYesterday] = await Promise.all([
    readJsonFile("./data/seats.json"),
    readJsonFile("./data/availability-yesterday.json"),
    readJsonFile("./data/availability-today.json"),
  ]);

  return {
    seats,
    availabilityToday,
    availabilityYesterday,
  };
}
