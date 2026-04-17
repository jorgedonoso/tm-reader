import { describe, it, expect } from "vitest";
import {
  eventParser,
  readJsonFile,
  seatsParser,
  availableSeatsParser,
} from "../helpers";

describe("parsers logic tests", () => {
  it("parses availability venue seats for today", async () => {
    const availableSeats = await readJsonFile("./data/availability-today.json");
    const expectJson = await readJsonFile(
      "./tests/results/available-today-seat-ids.json",
    );

    expect(availableSeatsParser(availableSeats)).toStrictEqual(expectJson);
  });

  it("parses availability venue seats for yesterday", async () => {
    const availableSeats = await readJsonFile(
      "./data/availability-yesterday.json",
    );
    const expectJson = await readJsonFile(
      "./tests/results/available-seat-ids.json",
    );

    expect(availableSeatsParser(availableSeats)).toStrictEqual(expectJson);
  });

  it("parses venue seats", async () => {
    const seats = await readJsonFile("./data/seats.json");
    const expectedSeats = await readJsonFile(
      "./tests/results/venue-details.json",
    );
    expect(seatsParser(seats)).toStrictEqual(expectedSeats);
  });

  it("parses hardcoded event IDs 2", () => {
    expect(eventParser("GQYDOOS[DHI[YQ,ZA],FHI[YQ,ZA]]")).toStrictEqual([
      "GQYDOOSDHIYQ",
      "GQYDOOSDHIZA",
      "GQYDOOSFHIYQ",
      "GQYDOOSFHIZA",
    ]);
  });

  it("parses hardcoded event IDs 1", () => {
    expect(eventParser("GIYDIOSIHI[3[A,Q],YT[K,M,O,Q]]")).toStrictEqual([
      "GIYDIOSIHI3A",
      "GIYDIOSIHI3Q",
      "GIYDIOSIHIYTK",
      "GIYDIOSIHIYTM",
      "GIYDIOSIHIYTO",
      "GIYDIOSIHIYTQ",
    ]);
  });
});
