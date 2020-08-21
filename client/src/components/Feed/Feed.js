import React from "react";
import "./Feed.css";
import Tweetbox from "./TweetBox";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="feed">
      <h2 className="header">Home</h2>
      <Tweetbox />
      <Posts name=""
      userName=""
      verified={true}
      tweetContent=""
      avatar=""
      image="" />
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
