import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="container-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/searchbar">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/WebPlayback">
                Spotify Webplayer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
