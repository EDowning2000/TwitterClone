import React, { useState } from "react";
import "./Feed.css";
import Tweetbox from "./TweetBox";
import Posts from "./Posts";

function Feed() {
  const [posts, setPosts] = useState([]);
  //setting the initial state to an empty array
  return (
    <div className="feed">
      <h2 className="header">Home</h2>
      <Tweetbox />
      <Posts
        name=""
        userName=""
        verified={true}
        tweetContent=""
        avatar=""
        image=""
      />
      {/* <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/> */}
    </div>
  );
}
export default Feed;
