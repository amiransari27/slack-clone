import React from "react";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "store/StateProvider";

function Header() {
  const [state] = useStateValue();
  const { user } = state;
  return (
    <div className="header">
      <div className="header__left">
        {/* avatar for loggedin user */}
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        {/* time icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* search icon  */}
        <SearchIcon />
        {/* input */}
        <input placeholder="Search" type="text" />
      </div>
      <div className="header__right">
        {/* help icon  */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
