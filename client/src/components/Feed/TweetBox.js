import React from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetboxInput">
          <Avatar src="https://pbs.twimg.com/profile_images/968882665188478978/3aqyFu3g_400x400.jpg" />
          <input placeholder="What's happening?" type="text"></input>
          <input placeholder="Add image URL" type="text"></input>
        </div>
        <Button className='tweetboxBtn'>Tweet</Button>
      </form>
    </div>
  );
}
export default Tweetbox;
