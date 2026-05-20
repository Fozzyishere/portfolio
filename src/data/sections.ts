export const sections = [
  {
    slug: "about-me",
    label: "About Me",
    color: "var(--color-blue-light)",
    panelClass: "panel-about-me",
  },
  {
    slug: "projects",
    label: "Projects",
    color: "var(--color-purple-light)",
    panelClass: "panel-projects",
  },
  {
    slug: "contacts",
    label: "Contact",
    color: "var(--color-green-light)",
    panelClass: "panel-contact",
  },
] as const;

export type PortfolioSection = (typeof sections)[number];
export type SectionSlug = PortfolioSection["slug"];

export const sectionBySlug = sections.reduce(
  (sectionMap, section) => {
    sectionMap[section.slug] = section;
    return sectionMap;
  },
  {} as Record<SectionSlug, PortfolioSection>,
);

export function getSection(slug: SectionSlug): PortfolioSection {
  return sectionBySlug[slug];
}
