import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="container-nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Playlist">
              Playlist
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/WebPlayer">
              WebPlayer
            </Link>
          </li>
          {/* You may not need a direct login link in the navigation */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
