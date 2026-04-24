import { Segment } from "./Segment";

export type ResponseSeat = {
  pages: Page[];
};

type Page = {
  segments: Segment[];
};
