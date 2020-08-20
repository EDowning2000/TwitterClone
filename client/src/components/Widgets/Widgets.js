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

        <TwitterTweetEmbed tweetId={"https://twitter.com/_thedevloper/status/1295971027042803714?cxt=HKwWhICtoYyym_wjAAAA"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="EmersonDowning1"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://github.com/EDowning2000"}
          options={{ text: "Emerson seems pretty good, i can find him here =>", via: "EmersonDowning1" }}
        />



      </div>
    </div>
  );
}
export default Widgets;
