import React from "react";
import "../styles/sidebar.css";
import * as fa from "react-icons/fa";
import * as bs from "react-icons/bs";
import * as bi from "react-icons/bi";
import * as ri from "react-icons/ri";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="links">
        <li className="link">
          <fa.FaImages className="icon" />
          <h2>Pictures</h2>
        </li>
        <li className="link">
          <bs.BsFillCollectionPlayFill className="icon" />
          <h2>Videos</h2>
        </li>
        <li className="link">
          <bi.BiHeadphone className="icon" />
          <h2>Audio</h2>
        </li>
        <li className="link">
          <ri.RiPaintBrushFill className="icon" />
          <h2>Design</h2>
        </li>
        <li className="link">
          <ri.RiAccountCircleFill className="icon" />
          <h2>Account</h2>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
