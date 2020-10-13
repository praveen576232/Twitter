import "./Feed.css";
import React, { useEffect, useState } from "react";
import TweetBox from "./TweetBox/TweetBox";
import Poast from "./poast/Poast";
import db from "../firebase/firebase";
import FlipMove from 'react-flip-move';
function Feed() {
  const [poasts, setPoasts] = useState([]);
  useEffect(() => {
    db.collection("tweets")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        setPoasts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
        <TweetBox />
      </div>
<FlipMove>

      {poasts?.map((poast) => (
        <Poast
        key={poast?.id}
          avatar={poast?.data?.photourl}
          displaname={poast?.data?.displayname}
          username={poast?.data?.username}
          text={poast?.data?.tweet}
          image={poast?.data?.image}
          time={poast?.data?.time}
        />
      ))}
</FlipMove>
    </div>
  );
}

export default Feed;
