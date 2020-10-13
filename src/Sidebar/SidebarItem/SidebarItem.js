import "./SidebarItem.css";
import React from "react";

function SidebarItem({active, Icon, title }) {
  return (
    <div className={`sidebaritem ${active && 'sidebaritem-active'}  `}>
      <Icon className="sidebaritem_icon" />
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarItem;
