import { useState, useEffect } from "react";

function useSystemTheme() {
  const getSystemTheme = () => {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getSystemTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return theme;
}

export default useSystemTheme;
