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

      expect(seatsParser(seatData)).toStrictEqual({
        zones: [
          {
            name: "303",
            sections: [
              {
                name: "303",
                rows: [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                  "P",
                ],
              },
            ],
          },
          {
            name: "304",
            sections: [
              {
                name: "304",
                rows: ["P", "D", "E", "F", "G", "J", "K", "L", "M", "N"],
              },
            ],
          },
          {
            name: "ULTRA-PREMIUM",
            sections: [
              {
                name: "202VIP",
                rows: ["CVP", "BVP"],
              },
              {
                name: "203VIP",
                rows: ["CVP", "BVP"],
              },
              {
                name: "204VIP",
                rows: ["BVP"],
              },
            ],
          },
          {
            name: "FLOOR 103",
            sections: [
              {
                name: "103",
                rows: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"],
              },
            ],
          },
          {
            name: "PREMIUM FLOOR",
            sections: [
              {
                name: "202FLR",
                rows: ["AVP"],
              },
              {
                name: "204FLR",
                rows: ["AVP"],
              },
              {
                name: "203FLR",
                rows: ["AVP"],
              },
            ],
          },
          {
            name: "FLOOR 102",
            sections: [
              {
                name: "102",
                rows: ["A", "B", "C", "D", "E", "F", "G", "H", "J"],
              },
            ],
          },
          {
            name: "302",
            sections: [
              {
                name: "302",
                rows: [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                  "P",
                ],
              },
            ],
          },
          {
            name: "301",
            sections: [
              {
                name: "301",
                rows: ["A", "B", "C", "D", "E"],
              },
            ],
          },
          {
            name: "PREMIUM ",
            sections: [
              {
                name: "305VIP",
                rows: ["GVP"],
              },
              {
                name: "303VIP",
                rows: ["GVP"],
              },
            ],
          },
          {
            name: "402",
            sections: [
              {
                name: "402",
                rows: [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                ],
              },
            ],
          },
          {
            name: "203",
            sections: [
              {
                name: "203",
                rows: ["F", "G", "H", "J", "K", "L"],
              },
            ],
          },
          {
            name: "401",
            sections: [
              {
                name: "401",
                rows: ["A", "B", "C", "D", "E", "F"],
              },
            ],
          },
          {
            name: "205",
            sections: [
              {
                name: "205",
                rows: [
                  "AA",
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                ],
              },
            ],
          },
          {
            name: "PREMIUM",
            sections: [
              {
                name: "304VIP",
                rows: ["AVP"],
              },
            ],
          },
          {
            name: "202",
            sections: [
              {
                name: "202",
                rows: ["F", "G", "H", "J", "K", "L"],
              },
            ],
          },
          {
            name: "403",
            sections: [
              {
                name: "403",
                rows: [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                ],
              },
            ],
          },
          {
            name: "204",
            sections: [
              {
                name: "204",
                rows: ["F", "G", "H", "J", "K", "L"],
              },
            ],
          },
          {
            name: "404",
            sections: [
              {
                name: "404",
                rows: [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                ],
              },
            ],
          },
          {
            name: "201",
            sections: [
              {
                name: "201",
                rows: [
                  "AA",
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                ],
              },
            ],
          },
          {
            name: "405",
            sections: [
              {
                name: "405",
                rows: [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                ],
              },
            ],
          },
          {
            name: "406",
            sections: [
              {
                name: "406",
                rows: [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                ],
              },
            ],
          },
          {
            name: "407",
            sections: [
              {
                name: "407",
                rows: ["A", "B", "C", "D", "E", "F"],
              },
            ],
          },
          {
            name: "FLOOR 101",
            sections: [
              {
                name: "101",
                rows: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"],
              },
            ],
          },
          {
            name: "307",
            sections: [
              {
                name: "307",
                rows: ["A", "B", "C", "D", "E"],
              },
            ],
          },
          {
            name: "305",
            sections: [
              {
                name: "305",
                rows: [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                  "P",
                ],
              },
            ],
          },
          {
            name: "306",
            sections: [
              {
                name: "306",
                rows: [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                  "P",
                ],
              },
            ],
          },
        ],
      });
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
