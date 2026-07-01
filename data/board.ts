/**
 * Leadership / board seed data.
 * NAMES are CONFIRMED (from the Club's public About page).
 * title / company / wscRole below were sourced via public web research
 * (the Club's per-person pages + employer/press sources) and adversarially
 * verified. `detailsConfirmed` marks title+company corroborated by sources;
 * `roleConfirmed` marks the WSC role independently corroborated.
 * Two roles (Andrew Deshong, Peggy Menard) are not fully corroborated — see
 * CONTENT-TODO.md. image: generated placeholder until real headshots arrive.
 */
export interface BoardMember {
  name: string; // CONFIRMED
  title: string; // professional/day-job title
  company: string; // employer
  wscRole: string; // role at The Water Street Club
  image: string; // placeholder
  confirmed: boolean; // NAME confirmed
  detailsConfirmed: boolean; // title + company corroborated by sources
  roleConfirmed: boolean; // WSC role independently corroborated
  source: string; // primary supporting source
}

export const board: BoardMember[] = [
  {
    name: "John Mancebo",
    title: "Equity Partner; Managing Partner, Westchester County office",
    company: "Kaufman Dolowich LLP",
    wscRole: "Chairman & Founding Member",
    image: "",
    confirmed: true,
    detailsConfirmed: true,
    roleConfirmed: true,
    source: "https://www.thewaterstreetclub.com/john-mancebo",
  },
  {
    name: "Ayesha West",
    title: "Global Head of U.S. Cyber Liability (now Senior Client Advocate, WTW)",
    company: "Everest Insurance / WTW",
    wscRole: "Co-Founder & Board Member",
    image: "",
    confirmed: true,
    detailsConfirmed: true,
    roleConfirmed: true,
    source: "https://www.thewaterstreetclub.com/ayesha-west",
  },
  {
    name: "Kirk Hudson",
    title: "Senior Complex Claims Director (Executive & Professional / Cyber E&O)",
    company: "Berkshire Hathaway Specialty Insurance",
    wscRole: "Treasurer & Co-Founding Member",
    image: "",
    confirmed: true,
    detailsConfirmed: true,
    roleConfirmed: true,
    source: "https://www.thewaterstreetclub.com/kirk-hudson",
  },
  {
    name: "Peggy Menard",
    title: "Vice President, Large Property Leader",
    company: "Sompo Global Risk Solutions",
    wscRole: "Board Member", // [SAMPLE — confirm exact WSC role]
    image: "",
    confirmed: true,
    detailsConfirmed: true,
    roleConfirmed: false,
    source: "https://www.thewaterstreetclub.com/peggy-menard",
  },
  {
    name: "Denise Campbell",
    title: "Senior Vice President, Client Executive",
    company: "Marsh",
    wscRole: "Board Member",
    image: "",
    confirmed: true,
    detailsConfirmed: true,
    roleConfirmed: true,
    source: "https://www.thewaterstreetclub.com/denise-campbell",
  },
  {
    name: "Tevin Smith",
    title: "Senior Vice President, Head of Operations & Technology (MCPL practice)",
    company: "NFP",
    wscRole: "Secretary",
    image: "",
    confirmed: true,
    detailsConfirmed: true,
    roleConfirmed: true,
    source: "https://www.thewaterstreetclub.com/tevin-smith",
  },
  {
    name: "Andrew Deshong",
    title: "Manager, Enterprise Risk & Vice President, Insurance",
    company: "Flagstar Bank",
    wscRole: "Board Member", // [SAMPLE — confirm WSC role; affiliation confirmed, role not corroborated]
    image: "",
    confirmed: true,
    detailsConfirmed: true,
    roleConfirmed: false,
    source: "https://www.thewaterstreetclub.com/andrewdeshong/",
  },
];
