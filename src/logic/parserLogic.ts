import { Segment } from "../types/Segment";
import { VenueRow } from "../types/VenueRow";
import { VenueSection } from "../types/VenueSection";
import { VenueZone } from "../types/VenueZone";

// Map raw data into a readable structure.
export function mapSeats(data: any) {
  let zone: string, section: string, row: string;
  const res: VenueRow[] = [];

  // Third-party format. Can't be changed.
  data.pages.forEach((p: Segment) => {
    p.segments.forEach((z) => {
      zone = z.name;
      z.segments.forEach((s: Segment) => {
        section = s.name;
        s.segments.forEach((r: Segment) => {
          row = r.name;
          r.placesNoKeys.forEach((pnk: [string, string]) => {
            res.push({
              id: pnk[0],
              zone,
              section,
              row,
              num: pnk[1],
            });
          });
        });
      });
    });
  });

  return res;
}

// Aggregates seat ids from data.
export function availableSeatsParser(data: any) {
  const seatIds: any = [];

  data.facets.forEach((f: any) => {
    f.places.forEach((p: any) => {
      seatIds.push(...eventParser(p));
    });
  });

  return seatIds;
}

// Aggregates zones, sections and rows.
export function seatsParser(data: any) {
  const zones = data.pages[0].segments.map((zone: VenueZone) => {
    return {
      name: zone.name,
      sections: (zone.segments || []).map((section: VenueSection) => {
        return {
          name: section.name,
          rows: (section.segments || []).map((row: VenueRow) => row.name),
        };
      }),
    };
  });

  return { zones };
}

// Parses event ids from single string with regex like syntax.
// Ex: "GEYDCOSDHI[2Q,3[A,Q],4[A,Q]]"
export function eventParser(input: string) {
  return parse(input);

  function parse(str: string) {
    let i = 0;

    const results = [""];

    while (i < str.length) {
      if (str[i] === "[") {
        let start = i;
        let depth = 1;
        i++;

        while (i < str.length && depth > 0) {
          if (str[i] === "[") depth++;
          else if (str[i] === "]") depth--;
          i++;
        }

        const block = str.slice(start + 1, i - 1);

        const options = splitTopLevel(block).map(parse);

        const next = [];
        for (const base of results) {
          for (const optList of options) {
            for (const opt of optList) {
              next.push(base + opt);
            }
          }
        }

        results.length = 0;
        results.push(...next);
      } else {
        let start = i;
        while (i < str.length && str[i] !== "[") i++;

        const chunk = str.slice(start, i);

        for (let j = 0; j < results.length; j++) {
          results[j] += chunk;
        }
      }
    }

    return results;
  }

  function splitTopLevel(str: string) {
    const parts = [];
    let depth = 0;
    let current = "";

    for (const c of str) {
      if (c === "," && depth === 0) {
        parts.push(current);
        current = "";
      } else {
        if (c === "[") depth++;
        if (c === "]") depth--;
        current += c;
      }
    }

    if (current) parts.push(current);
    return parts;
  }
}
