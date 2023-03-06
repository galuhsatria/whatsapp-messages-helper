import React, { useEffect, useState } from "react";
const DarkMode = () => {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(
    () => {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
    },
    [theme],
    colorTheme
  );
  return [colorTheme, setTheme];
};

export default DarkMode;
