import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./TweetBox";
import FlipMove from "react-flip-move";
import Post from "./Post";
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

      <FlipMove>
        {posts.map((posts) => (
          <Post
            key={posts.tweetContent}
            name={posts.name}
            userName={posts.userName}
            verified={posts.verified}
            tweetContent={posts.tweetContent}
            avatar={posts.avatar}
            image={posts.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}
export default Feed;
