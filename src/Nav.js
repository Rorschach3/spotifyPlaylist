import { NavLink } from 'react-router-dom';
import React from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';
import WebPlayback from './WebPlayback';
import SignUpForm from './SignUpForm';
import Login from './Login';

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-1">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/webplayback">WebPlayer</NavLink>
          </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">SignUp</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">SignIn</NavLink>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
