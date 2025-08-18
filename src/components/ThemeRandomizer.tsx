"use client";

import { useEffect } from "react";

const themes = [
  "gruvbox",
  "tokyo",
  "dracula", 
  "nord",
  "onedark",
  "ayu",
  "catppuccin",
  "solarized",
  "rosepine",
  "palenight"
] as const;

const themeVariables = {
  gruvbox: "gruvbox",
  tokyo: "tokyo", 
  dracula: "dracula",
  nord: "nord",
  onedark: "onedark",
  ayu: "ayu",
  catppuccin: "catppuccin",
  solarized: "solarized",
  rosepine: "rosepine",
  palenight: "palenight"
} as const;

export default function ThemeRandomizer() {
  useEffect(() => {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    const themePrefix = themeVariables[randomTheme];
    
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    
    const applyThemeColor = (property: string) => {
      const sourceVar = `--color-${themePrefix}-${property}`;
      const targetVar = `--color-${property}`;
      const colorValue = computedStyle.getPropertyValue(sourceVar).trim();
      
      if (colorValue) {
        root.style.setProperty(targetVar, colorValue);
      }
    };

    applyThemeColor('bg0');
    applyThemeColor('bg1');
    applyThemeColor('bg2');
    applyThemeColor('bg3');
    applyThemeColor('bg4');
    applyThemeColor('fg0');
    applyThemeColor('fg1');
    applyThemeColor('fg2');
    applyThemeColor('fg3');
    applyThemeColor('fg4');
    applyThemeColor('red-dark');
    applyThemeColor('red-light');
    applyThemeColor('green-dark');
    applyThemeColor('green-light');
    applyThemeColor('yellow-dark');
    applyThemeColor('yellow-light');
    applyThemeColor('blue-dark');
    applyThemeColor('blue-light');
    applyThemeColor('purple-dark');
    applyThemeColor('purple-light');
    applyThemeColor('aqua-dark');
    applyThemeColor('aqua-light');
    applyThemeColor('gray-dark');
    applyThemeColor('gray-light');
    applyThemeColor('orange-dark');
    applyThemeColor('orange-light');
  }, []);

  return null;
}