import "./Poast.css";
import React, { forwardRef, useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
const Poast = forwardRef(({ displaname, username, image, text, avatar,time },ref) => {
  const [timeago,setTimeago]=useState("");
  useEffect(()=>{
  
if(time){
  const sec = (new Date() - new Date(time.toDate()))/1000;
  if(sec <= 60){
    if(sec  < 0){
      setTimeago(`1sec`)
    }else{
      
      setTimeago(`${parseInt(sec)}sec`)
    }
  }else if (sec <= 3600){
  
    const ago =parseInt((sec/60));
    setTimeago(`${ago}min`)
   
  }else if (sec <= 86400){
    const ago =parseInt((sec/(60*60)));
    setTimeago(`${ago}h`)
   
  }else if (sec <= 2592000){
    const ago =parseInt((sec/(60*60*24)));
    setTimeago(`${ago}d`)
   
  }else if(sec <= 311010000){
    const ago =parseInt((sec/(60*60*24*12)));
    setTimeago(`${ago} mounth`)
   
  }
} 
},[time]);
  return (
    <div ref={ref} className="poast">
      <div className="poast_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="poast_body">
        <div className="poast_body_header">
          <div className="poast_body_header_text">
            <h3>
              {displaname}
              <span>
                <VerifiedUserIcon
                  className="poast_body_badge"
                  fontSize="small"
                />
              </span>
            </h3>
  <h2> @{username} {timeago && `   ${timeago}`}</h2>
          </div>
          <div className="poast_body_discription">
            <p>{text}</p>
          </div>

          <img alt="" src={image}></img>
          <div className="poast_footer">
            <FavoriteBorderOutlinedIcon />
            <RepeatIcon />
            <ChatBubbleOutlineOutlinedIcon />
            <PublishIcon />
          </div>
        </div>
      </div>
    </div>
  );
})

export default Poast;
