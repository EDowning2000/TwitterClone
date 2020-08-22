import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./TweetBox";
import Posts from "./Posts";
import db from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  //setting the initial state to an empty array

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  //still a shade confused on this bit

  return (
    <div className="feed">
      <h2 className="header">Home</h2>
      <Tweetbox />
      {posts.map((post) => {
        <Posts
          name={post.name}
          userName={post.userName}
          verified={post.verified}
          tweetContent={post.tweetContent}
          avatar={post.avatar}
          image={post.image}
        />;
      })}
      {/* <Posts
        name=""
        userName=""
        verified={true}
        tweetContent=""
        avatar=""
        image=""
      /> */}
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
