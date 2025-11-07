import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTheme() {
  // detect system preference (light/dark)
  const systemPrefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // initialize with stored value or system theme
  const { value: theme, addValue } = useLocalStorage(
    "theme",
    systemPrefersDark ? "dark" : "light"
  );

  // Apply theme to <html data-theme="...">
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  // Listen for system theme changes (if user switches OS theme)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const newSystemTheme = e.matches ? "dark" : "light";
      addValue(newSystemTheme);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [addValue]);

  // Toggle manually
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    addValue(newTheme);
  };

  return { theme, toggleTheme };
}
