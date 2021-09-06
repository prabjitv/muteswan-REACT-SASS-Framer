import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-links">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/releases">
          <li>Releases</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  </nav>
);

export default Navbar;
