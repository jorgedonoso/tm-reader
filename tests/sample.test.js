import { describe, it, vi, expect } from "vitest";
import {
  eventParser,
  readJsonFile,
  seatsParser,
  availableSeatsParser,
  formatAndPrintSeats,
} from "../helpers";

describe("add()", () => {
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

  it("prints correct seats", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const mockData = { facets: [{ places: ["Seat X", "Seat Y", "Seat Z"] }] };

    formatAndPrintSeats(mockData, "Tomorrow");

    expect(spy).toHaveBeenCalledTimes(3);

    expect(spy.mock.calls).toEqual([
      ["Tickets Available ", "Tomorrow"],
      ["Total: ", 3],
      [["Seat X", "Seat Y", "Seat Z"]],
    ]);

    spy.mockRestore();
  });

  it("prints correct empty seats", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const mockData = { facets: [{ places: [] }] };

    formatAndPrintSeats(mockData, "Tomorrow");

    expect(spy).toHaveBeenCalledTimes(3);

    expect(spy.mock.calls).toEqual([
      ["Tickets Available ", "Tomorrow"],
      ["Total: ", 0],
      [[]],
    ]);

    spy.mockRestore();
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
