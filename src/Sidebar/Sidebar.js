import React from 'react'
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SidebarItem from './SidebarItem/SidebarItem';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button, IconButton } from '@material-ui/core';
import { auth } from './../firebase/firebase';
function Sidebar() {
    const signout =() => {
        auth.signOut()
    }
    return (
        <div className="sidebar">
            <IconButton onClick={signout}>

           <TwitterIcon className="sidebar_twitter_icon"/>
            </IconButton>
           <SidebarItem Icon={HomeOutlinedIcon} title="Home" active={true}/>
           <SidebarItem Icon={ExploreOutlinedIcon} title="Explore"/>
           <SidebarItem Icon={NotificationsNoneOutlinedIcon} title="Notifications"/>
           <SidebarItem Icon={MailOutlineOutlinedIcon} title="Messages"/>
           <SidebarItem Icon={BookmarkBorderOutlinedIcon} title="Bookmarks"/>
           <SidebarItem Icon={ListAltOutlinedIcon} title="List"/>
           <SidebarItem Icon={PersonOutlineOutlinedIcon} title="Profile"/>
           <SidebarItem Icon={MoreHorizOutlinedIcon} title="More"/>
           <Button className="sidebar_tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
