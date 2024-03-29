import React, { useState } from "react";
import Select from "react-select";
import { themeOptions } from "../Utils/themeOptions";
import { useTheme } from "../Context/ThemeContext";

const Footer = () => {
  const { setTheme, theme } = useTheme();
  const handleChange = (e) => {
    console.log(e);
    setTheme(e.value);
    localStorage.setItem("theme", JSON.stringify(e.value));
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="footer">
      <div className="reload">
        <button onClick={handleReload}>Try Again</button>
      </div>
      <div className="themeButton">
        <Select
          onChange={handleChange}
          options={themeOptions}
          menuPlacement="top"
          defaultValue={{ label: theme.label, value: theme }}
          styles={{
            control: (styles) => ({ ...styles, backgroundColor: "white" }),
            menu: (styles) => ({ ...styles, background: theme.background }),
            option: (styles, { isFocused }) => {
              return {
                ...styles,
                backgroundColor: !isFocused
                  ? theme.background
                  : theme.textColor,
                color: !isFocused ? theme.textColor : theme.background,
                cursor: "pointer",
              };
            },
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
