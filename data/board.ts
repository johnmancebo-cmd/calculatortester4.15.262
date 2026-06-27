/**
 * Leadership / board seed data.
 * NAMES are CONFIRMED (from the Club's public About page).
 * title / company / wscRole are [PLACEHOLDER] — client must supply.
 * image: generated placeholder (initials avatar) until real headshots arrive.
 */
export interface BoardMember {
  name: string; // CONFIRMED
  title: string; // [PLACEHOLDER]
  company: string; // [PLACEHOLDER]
  wscRole: string; // [PLACEHOLDER]
  image: string; // placeholder
  confirmed: boolean; // refers to the NAME being confirmed
}

export const board: BoardMember[] = [
  {
    name: "John Mancebo",
    title: "[PLACEHOLDER: title]",
    company: "[PLACEHOLDER: company]",
    wscRole: "[PLACEHOLDER: WSC role]",
    image: "",
    confirmed: true,
  },
  {
    name: "Ayesha West",
    title: "[PLACEHOLDER: title]",
    company: "[PLACEHOLDER: company]",
    wscRole: "[PLACEHOLDER: WSC role]",
    image: "",
    confirmed: true,
  },
  {
    name: "Kirk Hudson",
    title: "[PLACEHOLDER: title]",
    company: "[PLACEHOLDER: company]",
    wscRole: "[PLACEHOLDER: WSC role]",
    image: "",
    confirmed: true,
  },
  {
    name: "Peggy Menard",
    title: "[PLACEHOLDER: title]",
    company: "[PLACEHOLDER: company]",
    wscRole: "[PLACEHOLDER: WSC role]",
    image: "",
    confirmed: true,
  },
  {
    name: "Denise Campbell",
    title: "[PLACEHOLDER: title]",
    company: "[PLACEHOLDER: company]",
    wscRole: "[PLACEHOLDER: WSC role]",
    image: "",
    confirmed: true,
  },
  {
    name: "Tevin Smith",
    title: "[PLACEHOLDER: title]",
    company: "[PLACEHOLDER: company]",
    wscRole: "[PLACEHOLDER: WSC role]",
    image: "",
    confirmed: true,
  },
  {
    name: "Andrew Deshong",
    title: "[PLACEHOLDER: title]",
    company: "[PLACEHOLDER: company]",
    wscRole: "[PLACEHOLDER: WSC role]",
    image: "",
    confirmed: true,
  },
];
