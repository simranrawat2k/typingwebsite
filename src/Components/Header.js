import React from "react";
import AccountCircle from "./AccountCircle";
import KeyboardIcon from "@mui/icons-material/Keyboard";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-title">TypeCat</div>
        <div className="keyboard">
          <KeyboardIcon />
        </div>
      </div>
      <div className="user-icon">
        <AccountCircle />
      </div>
    </div>
  );
};

export default Header;
