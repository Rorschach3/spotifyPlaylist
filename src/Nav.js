import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-1">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TestPage1">
                Test Page 1
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/TestPage2">
                Test Page 2
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
