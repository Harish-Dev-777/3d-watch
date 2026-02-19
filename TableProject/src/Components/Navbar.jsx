import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
      <h1>MyWebsite</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Help</li>
      </ul>
      <div className="btn">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
