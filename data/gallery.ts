/**
 * Gallery seed data, grouped by year.
 * All images are generated placeholders; captions are [SAMPLE].
 * Years map to CONFIRMED dinner editions plus general programming.
 */
export interface GalleryItem {
  caption: string; // [SAMPLE]
  alt: string;
  image: string; // placeholder
}

export interface GalleryYear {
  year: number;
  items: GalleryItem[];
}

const placeholderItems = (year: number, labels: string[]): GalleryItem[] =>
  labels.map((label) => ({
    caption: `[SAMPLE] ${label} (${year})`,
    alt: `Placeholder image — ${label}, ${year}`,
    image: "",
  }));

export const gallery: GalleryYear[] = [
  {
    year: 2024,
    items: placeholderItems(2024, [
      "Awards Dinner reception",
      "Honoree on stage",
      "Summer Soirée with the John Street Club",
      "Networking moment",
    ]),
  },
  {
    year: 2023,
    items: placeholderItems(2023, [
      "Awards Dinner at The View",
      "Honoree group photo",
      "Cyber trends panel",
    ]),
  },
  {
    year: 2022,
    items: placeholderItems(2022, [
      "Awards Dinner reception",
      "Stage recognition",
      "Guests at The View",
    ]),
  },
  {
    year: 2019,
    items: placeholderItems(2019, ["Awards Dinner", "Honoree portrait"]),
  },
  {
    year: 2018,
    items: placeholderItems(2018, ["Awards Dinner", "Guests and honorees"]),
  },
];
