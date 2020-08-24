import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = e
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetboxInput">
          <Avatar src="https://pbs.twimg.com/profile_images/968882665188478978/3aqyFu3g_400x400.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          ></input>
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetboxInputImg"
          placeholder="Add image URL"
          type="text"
        ></input>
        <Button 
        type="submit" 
        className="tweetboxBtn"
        onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
}
export default Tweetbox;
