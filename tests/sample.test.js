import { describe, it, expect } from "vitest";
import { eventParser, seatsParser } from "../helpers";
import fs from "fs/promises";

describe("add()", () => {
  it("parses venue seats", async () => {
    try {
      const [seatDataRaw] = await Promise.all([
        fs.readFile("./data/seats.json", "utf-8"),
      ]);

      const seatData = JSON.parse(seatDataRaw);

      expect(seatsParser(seatData)).toStrictEqual([
        "303",
        "304",
        "ULTRA-PREMIUM",
        "FLOOR 103",
        "PREMIUM FLOOR",
        "FLOOR 102",
        "302",
        "301",
        "PREMIUM ",
        "402",
        "203",
        "401",
        "205",
        "PREMIUM",
        "202",
        "403",
        "204",
        "404",
        "201",
        "405",
        "406",
        "407",
        "FLOOR 101",
        "307",
        "305",
        "306",
      ]);
    } catch (err) {
      console.error("Error reading files:", err);
    }
  });

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
