import React from "react";
import "./Widgets.js";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgetsInput">
        <SearchIcon className="widgetsSearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgetsContainer">
        <h2>What's Happening</h2>
      </div>
    </div>
  );
}
export default Widgets;
