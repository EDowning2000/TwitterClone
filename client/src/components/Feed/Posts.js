import React from "react";
import "./Posts.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUserOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Posts({ name, userName, verified, tweetContent, image, avatar }) {
  return (
    <div className="posts">
      <div className="postsAvatar">
        <Avatar src="https://pbs.twimg.com/profile_images/968882665188478978/3aqyFu3g_400x400.jpg" />
      </div>
      <div className="postsBody">
        <div className="postsHeader">
          <div className="postsHeaderText">
            <h3>
              Emerson Downing{""}{" "}
              <span>
                <VerifiedUserIcon className="postsBadge" />
              </span>
            </h3>
          </div>
          <div className="postsDescription">
            <p>Hello World</p>
          </div>
        </div>

        <img src="https://media.giphy.com/media/lszAB3TzFtRaU/giphy.gif" />
        <div className="postsFooter">
          <ChatBubbleOutlineIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small"/>
          <RepeatIcon fontSize="small"/>
          <PublishIcon fontSize="small"/>

        </div>
      </div>
    </div>
  );
}
export default Posts;
