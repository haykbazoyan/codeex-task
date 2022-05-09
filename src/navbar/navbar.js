import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="container">
        <div to="/" className="logo">
          <span>Trip At Restaurant</span>
        </div>
        <div className="menu-items">
          <a href="/">Home</a>
          <a href="/">About</a>
        </div>
      </nav>
    </>
  );
}
