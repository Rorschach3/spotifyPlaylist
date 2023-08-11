import { Link } from 'react-router-dom';


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
							<Link className="nav-link" to="/TestPage1">
								TestPage1
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/WebPlayer">
								WebPlayer
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Nav;
