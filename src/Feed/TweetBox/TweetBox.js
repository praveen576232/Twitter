import "./TweetBox.css";
import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "../../stateprovider/stateprovider";
import db from "../../firebase/firebase";
import firebase from 'firebase'
function TweetBox() {
  const [{ user }] = useStateValue();
  const [msg, setMsg] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    if (msg && user) {
      if (imageUrl) {
        db.collection("tweets").add({
          tweet: msg,
          image: imageUrl,
          displayname: user?.displayName,
          photourl: user?.photoURL,
          username: user?.email.split("@")[0],
          time:firebase.firestore.FieldValue.serverTimestamp()
        });
      } else {
        db.collection("tweets").add({
          tweet: msg,

          displayname: user?.displayName,
          photourl: user?.photoURL,
          username: user?.email.split("@")[0],
          time:firebase.firestore.FieldValue.serverTimestamp()
        });
      }
      setImageUrl("");
      setMsg("");
    }
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src={user?.photoURL} />
          <input
          value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="what's happning?"
          ></input>
        </div>
        <input
        value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          placeholder="your image url (optinal)"
        ></input>
        <button style={{display:"none"}} onClick={sendTweet}>tweet</button>
        <div className="tweetbox_button_div">
          <Button onClick={sendTweet} className="tweetbox_button">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
