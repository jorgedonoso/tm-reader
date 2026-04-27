import { Segment } from "./Segment";

export type ResponseSeat = {
  pages: Page[];
};

export type Page = {
  segments: Segment[];
};
