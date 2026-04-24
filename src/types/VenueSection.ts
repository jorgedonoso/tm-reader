import { Segment } from "./Segment";
import { VenueRow } from "./VenueRow";

export type VenueSection = Segment & {
  name: string;
  rows: VenueRow[];
};
