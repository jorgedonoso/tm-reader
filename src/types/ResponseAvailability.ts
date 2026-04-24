type Meta = {
  modified: string;
};

type Facet = {
  places: string[];
};

export type ResponseAvailability = {
  meta: Meta;
  facets: Facet[];
};
