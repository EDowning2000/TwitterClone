import React, { forwardRef } from "react";
import "./Posts.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Posts({ name, userName, verified, tweetContent, image, avatar }, ref) {
  return (
    <div className="posts" ref={ref}>
      <div className="postsAvatar">
        <Avatar src={avatar} />
      </div>

      <div className="postsBody">
        <div className="postsHeader">
          <div className="postsHeaderText">
            <h3>
              {name}
              <span className="postsHeaderSpecial">
                {verified && <VerifiedUserIcon className="postsBadge" />}@
                {userName}
              </span>
            </h3>
          </div>
          {/* end of user info */}

          <div className="postsDescription">
            <p>{tweetContent}</p>
          </div>
        </div>
        {/* end of header */}
        {/* eslint-disable-next-line */}
        <img
          src={image}
          // alt="tweet image"
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
