import { Segment } from "./Segment";
import { VenueSection } from "./VenueSection";

export type VenueZone = Segment & {
  name: string;
  sections: VenueSection[];
};
