import React from "react";
import "./Posts.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
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
              Emerson Downing{" "}
              <span className="postsHeaderSpecial">
                <VerifiedUserIcon className="postsBadge" />
                @EmersonDowning1
              </span>
            </h3>
          </div>
          {/* end of user info */}

          <div className="postsDescription">
            <p>Hello World</p>
          </div>
        </div>
        {/* end of header */}
        {/* eslint-disable-next-line */}
        <img
          src="https://media.giphy.com/media/lszAB3TzFtRaU/giphy.gif"
          alt="tweet image"
        />
        {/* tweet image */}
        <div className="postsFooter">
          <ChatBubbleOutlineIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
        {/* end of post footer */}
      </div>
    </div>
  );
}
export default Posts;
