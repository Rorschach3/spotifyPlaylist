import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <div className="container-nav">
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/example">Example</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signUp">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signIn">Login</Link>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;