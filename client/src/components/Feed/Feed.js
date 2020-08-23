import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./TweetBox";
import FlipMove from "react-flip-move";
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

      <FlipMove>
        {posts.map((post) => (
          <Posts
            // key={post.text}
            displayName={post.name}
            username={post.userName}
            verified={post.verified}
            text={post.tweetContent}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}
export default Feed;
