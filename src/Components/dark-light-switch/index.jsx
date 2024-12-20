import React, { useState } from "react";
import UseLocalStorage from "./useLocalStorage.jsx";
import "./style.css";
export default function LightDarkSwitcher() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={() => handleToggleTheme()}>Change Theme</button>
      </div>
    </div>
  );
}
