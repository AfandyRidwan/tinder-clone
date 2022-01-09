import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import "./Header.css";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://www.pngfind.com/pngs/m/13-131073_this-post-is-a-part-of-tinder-logo.png"
        alt=""
      />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
