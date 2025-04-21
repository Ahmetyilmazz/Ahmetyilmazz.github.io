import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand text-dark fw-bold" to="/">
          ANA SAYFA
        </Link>

        {/* Menü - her zaman açık */}
        <ul className="navbar-nav d-flex flex-row gap-3 ms-auto">
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link text-dark text-uppercase fw-semibold px-2 link-primary"
            >
              Hakkımda
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-dark text-uppercase fw-semibold px-2 link-primary"
              to="/projects"
            >
              Projeler
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-dark text-uppercase fw-semibold px-2 link-primary"
              to="/certificate"
            >
              Sertifikalar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-dark text-uppercase fw-semibold px-2 link-primary"
              to="/contact"
            >
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
