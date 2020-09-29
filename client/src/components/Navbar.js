import React from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const history = useHistory();

  // const search = () => history.push("/search");
  // const saved = () => history.push("/saved");

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Google Book Search
          </Link>
          <a data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/saved">Saved</Link>
        </li>
      </ul>
    </div>
  );
}
