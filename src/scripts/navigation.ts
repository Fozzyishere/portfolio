const sectionLabels: Record<string, string> = {
  "about-me": "About Me",
  projects: "Projects",
  contact: "Contact",
};

const sectionIds = Object.keys(sectionLabels);

type AppState = "overview" | "detail";
let currentState: AppState = "overview";
let activeSection: string | null = null;
let isTransitioning = false;

const overview = document.getElementById("overview")!;
const detail = document.getElementById("detail")!;
const navbar = document.getElementById("main-nav")!;
const detailTitle = document.getElementById("detail-title")!;
const sectionContent = document.getElementById("section-content")!;

function activateSection(sectionId: string) {
  sectionIds.forEach((id) => {
    const el = document.getElementById(`section-${id}`);
    if (el) el.classList.toggle("hidden", id !== sectionId);
  });
  detailTitle.textContent = sectionLabels[sectionId] ?? sectionId;
  activeSection = sectionId;
}

function showDetail(sectionId: string) {
  if (isTransitioning) return;
  if (currentState === "detail") {
    if (activeSection === sectionId) return;
    switchSection(sectionId);
    return;
  }

  isTransitioning = true;
  currentState = "detail";
  activateSection(sectionId);
  sectionContent.classList.remove("opacity-0");

  overview.classList.add("opacity-0", "pointer-events-none");
  detail.classList.remove("opacity-0", "pointer-events-none", "-translate-y-8");
  navbar.classList.remove("-translate-y-full");
  navbar.classList.add("translate-y-0");

  detail.scrollTop = 0;

  detail.addEventListener(
    "transitionend",
    () => {
      isTransitioning = false;
    },
    { once: true },
  );
}

function showOverview() {
  if (currentState === "overview" || isTransitioning) return;

  isTransitioning = true;
  currentState = "overview";
  activeSection = null;

  detail.classList.add("opacity-0", "pointer-events-none", "-translate-y-8");
  overview.classList.remove("opacity-0", "pointer-events-none");
  navbar.classList.add("-translate-y-full");
  navbar.classList.remove("translate-y-0");

  overview.addEventListener(
    "transitionend",
    () => {
      isTransitioning = false;
    },
    { once: true },
  );
}

function switchSection(sectionId: string) {
  if (activeSection === sectionId || isTransitioning) return;

  isTransitioning = true;
  sectionContent.classList.add("opacity-0");

  setTimeout(() => {
    activateSection(sectionId);
    detail.scrollTop = 0;
    sectionContent.classList.remove("opacity-0");
    isTransitioning = false;
  }, 150);
}

document.querySelectorAll<HTMLElement>("[data-section]").forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.add("active");
    const sectionId = panel.dataset.section;
    if (sectionId) showDetail(sectionId);
  });
});

overview.addEventListener("transitionend", () => {
  document.querySelectorAll<HTMLElement>("[data-section]").forEach((p) => {
    p.classList.remove("active");
  });
});

document.getElementById("back-btn")?.addEventListener("click", showOverview);
document.getElementById("nav-back-btn")?.addEventListener("click", showOverview);

document.querySelectorAll<HTMLElement>("[data-nav-section]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = (e.currentTarget as HTMLElement).dataset.navSection;
    if (sectionId) showDetail(sectionId);
  });
});
