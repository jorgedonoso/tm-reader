import { PlaceNoKey } from "./PlaceNoKey";

export type Segment = {
  name: string;
  placesNoKeys?: PlaceNoKey[];
  segments: Segment[];
  rows: any;
};
