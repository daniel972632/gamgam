export type PlaceCategory = "food" | "culture" | "stay" | "transport";

export type Trip = {
  id: string;
  title: string;
  destination: string;
  startsAt: string;
  endsAt: string;
  shareSlug: string;
};

export type PlaceCard = {
  id: string;
  title: string;
  area: string;
  startsAt: string;
  category: PlaceCategory;
};

export type ItineraryDay = {
  id: string;
  label: string;
  date: string;
  cards: PlaceCard[];
};
