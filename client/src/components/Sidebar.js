import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption Icon={HomeIcon} text="home" />
      <SidebarOption Icon={SearchIcon} text="explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="notifications" />
    </div>
  );
}
export default Sidebar;
