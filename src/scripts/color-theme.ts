export const COLOR_THEME_STORAGE_KEY = "portfolio-color-theme";

export const colorThemes = [
  "gruvbox",
  "tokyo",
  "dracula",
  "nord",
  "onedark",
  "ayu",
  "catppuccin",
  "solarized",
  "rosepine",
  "palenight",
] as const;

export type ColorTheme = (typeof colorThemes)[number];

export const colorProperties = [
  "bg0",
  "bg1",
  "bg2",
  "bg3",
  "bg4",
  "fg0",
  "fg1",
  "fg2",
  "fg3",
  "fg4",
  "red-dark",
  "red-light",
  "green-dark",
  "green-light",
  "yellow-dark",
  "yellow-light",
  "blue-dark",
  "blue-light",
  "purple-dark",
  "purple-light",
  "aqua-dark",
  "aqua-light",
  "gray-dark",
  "gray-light",
  "orange-dark",
  "orange-light",
] as const;

export function isColorTheme(value: string): value is ColorTheme {
  return (colorThemes as readonly string[]).includes(value);
}

export function applyColorTheme(theme: string, root: HTMLElement): void {
  colorProperties.forEach((prop) => {
    root.style.setProperty(
      `--color-${prop}`,
      `var(--color-${theme}-${prop})`,
    );
  });
}

export function getOrCreateColorTheme(): ColorTheme {
  const stored = sessionStorage.getItem(COLOR_THEME_STORAGE_KEY);

  if (stored && isColorTheme(stored)) {
    return stored;
  }

  const theme = colorThemes[Math.floor(Math.random() * colorThemes.length)];
  sessionStorage.setItem(COLOR_THEME_STORAGE_KEY, theme);
  return theme;
}

export function syncColorTheme(root: HTMLElement = document.documentElement): ColorTheme {
  const theme = getOrCreateColorTheme();
  applyColorTheme(theme, root);
  return theme;
}
