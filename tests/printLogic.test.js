import { describe, it, vi, expect } from "vitest";
import { formatAndPrintSeats } from "../src/logic/printLogic";

describe("print logic tests", () => {
  it("prints correct seats", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const mockData = {
      meta: { modified: "2026-05-07T13:00:00Z" },
      facets: [{ places: ["Seat X", "Seat Y", "Seat Z"] }],
    };

    formatAndPrintSeats(mockData, "Tomorrow");

    expect(spy).toHaveBeenCalledTimes(3);

    expect(spy.mock.calls).toEqual([
      ["Tickets Available", "Tomorrow"],
      ["Date ", "5/7/2026"],
      ["Total: ", 3],
    ]);

    spy.mockRestore();
  });

  it("prints correct empty seats", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const mockData = {
      meta: { modified: "2026-05-07T13:00:00Z" },
      facets: [{ places: [] }],
    };

    formatAndPrintSeats(mockData, "Tomorrow");

    expect(spy).toHaveBeenCalledTimes(3);

    expect(spy.mock.calls).toEqual([
      ["Tickets Available", "Tomorrow"],
      ["Date ", "5/7/2026"],
      ["Total: ", 0],
    ]);

    spy.mockRestore();
  });
});
