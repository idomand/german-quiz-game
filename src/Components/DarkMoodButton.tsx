import React from "react";
import "./DarkMoodButton.scss";
import { useTheme } from "../Util/ThemeContext";
export default function DarkMoodButton() {
  const { themeColor, setThemeColor } = useTheme();

  function handleThemeColorChange() {
    if (themeColor === "light") {
      setThemeColor("dark");
    } else {
      setThemeColor("light");
    }
  }
  return (
    <div className="DarkMoodButtonWrapper">
      <input
        onChange={handleThemeColorChange}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </div>
  );

  // return (
  //   <div className="darkMoodWrapper">
  //     <p>dark mood</p>
  //     <div className="toggle-switch">
  //       <input
  //         type="checkbox"
  //         className="toggle-switch-checkbox"
  //         name="toggleSwitch"
  //         id="toggleSwitch"
  //         onClick={() => {
  //           themeColor === "light"
  //             ? setThemeColor("dark")
  //             : setThemeColor("light");
  //         }}
  //       />
  //     </div>
  //   </div>
  // );
}
