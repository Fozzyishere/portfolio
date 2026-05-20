import { sections } from "../data/sections";
import {
  normalizePath,
  stripBasePath as stripConfiguredBasePath,
} from "../utils/paths";

type RouteKind = "home" | "section" | "other";
type RouteTransition =
  | "home-to-section"
  | "section-to-home"
  | "section-to-section"
  | "default";

type PreparationEvent = Event & {
  from: URL;
  to: URL;
};

type SwapEvent = PreparationEvent & {
  newDocument: Document;
};

const sectionSlugLookup = Object.create(null) as Record<string, true>;

sections.forEach((section) => {
  sectionSlugLookup[section.slug] = true;
});

function getBasePath(): string {
  return normalizePath(document.documentElement.dataset.basePath ?? "/");
}

function stripBasePath(pathname: string): string {
  return stripConfiguredBasePath(pathname, getBasePath());
}

function getRouteKind(url: URL): RouteKind {
  const path = stripBasePath(url.pathname);

  if (path === "/") return "home";

  const slug = path.replace(/^\//, "");
  return sectionSlugLookup[slug] ? "section" : "other";
}

function getRouteTransition(from: URL, to: URL): RouteTransition {
  const fromKind = getRouteKind(from);
  const toKind = getRouteKind(to);

  if (fromKind === "home" && toKind === "section") return "home-to-section";
  if (fromKind === "section" && toKind === "home") return "section-to-home";
  if (fromKind === "section" && toKind === "section") return "section-to-section";

  return "default";
}

function setRouteTransition(direction: RouteTransition): void {
  document.documentElement.dataset.routeTransition = direction;
}

document.addEventListener("astro:before-preparation", (rawEvent) => {
  const event = rawEvent as PreparationEvent;
  const direction = getRouteTransition(event.from, event.to);

  setRouteTransition(direction);
});

document.addEventListener("astro:before-swap", (rawEvent) => {
  const event = rawEvent as SwapEvent;
  const direction = getRouteTransition(event.from, event.to);

  event.newDocument.documentElement.dataset.routeTransition = direction;
  event.newDocument.documentElement.dataset.basePath =
    document.documentElement.dataset.basePath ?? "/";
});

document.addEventListener("astro:page-load", () => {
  delete document.documentElement.dataset.routeTransition;
});
