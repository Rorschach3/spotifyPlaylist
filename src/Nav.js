import { Link, NavLink } from 'react-router-dom';

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-1">
        <li className="nav-item">
          <NavLink className="navbar-brand" to="/">Spotify WebPlayer</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">Home</NavLink>
        </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/webPlayer">WebPlayer</NavLink>
          </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/signUp">Sign-Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signIn">Sign-In</NavLink>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
