import "./Widgets.css";
import React from "react";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widget">
      <div className="widget_input">
        <SearchIcon className="widget_searchIcon" />
        <input placeholder="Search Twitter"></input>
      </div>
      <div className="widget_container">
        <h2>What's happening</h2>
       
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="narendramodi"
          options={{ height: 500 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
