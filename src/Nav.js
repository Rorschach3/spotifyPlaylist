import { Link } from 'react-router-dom';

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-nav">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-1">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-link" to="/WebPlayback">Spotify Webplayback</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signUp">Sign-Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signIn">Sign-In</Link>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
