import React from "react";
import "../styles/navbar.css";
import { MenuItems } from "./MenuItems";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Rentashoot</h1>
      <div className="menu-icon"></div>

      <ul>
        {MenuItems.map((items, index) => {
          return (
            <li key={index}>
              <a className={items.cname} href={items.url}>
                {items.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
