import { describe, it, expect } from "vitest";
import { eventParser } from "../helpers";

describe("add()", () => {
  it("parses hardcoded event IDs", () => {
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
