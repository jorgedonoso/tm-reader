type Meta = {
  modified: string;
};

export type Facet = {
  places: string[];
};

export type ResponseAvailability = {
  meta: Meta;
  facets: Facet[];
};
