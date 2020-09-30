import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
 import db from "../../firebase";
 import profilePic from '../images/profilePic.jpg'


function Tweetbox() {

  const [tweetMessage, setTweetMessage] = useState("");

  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Emerson Downing",
      userName: "emersondowning1",
      verified: true,
      tweetContent: tweetMessage,
      image: tweetImage,
      avatar:
        {profilePic},
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetboxInput">
          <Avatar src={profilePic} />
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
        <Button type="submit" className="tweetboxBtn" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
}
export default Tweetbox;
