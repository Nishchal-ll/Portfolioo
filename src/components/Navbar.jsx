import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg text-center">
          <div id="navbarrr" className="container-fluid fixed-top bg-white">
            <img  src='./rsz_1nishchal.png' alt="My Image" width="110" height="45" className="ms-2"/>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse me-5 text-center" id="navbarSupportedContent">
              <ul className="nav nav-underline ms-auto me-auto mt-3 mb-2 fw-bold d-flex justify-content-center">
                <li id="navhover" className="nav-item">
                  <NavLink className="nav-link text-black px-2" to="/" exact activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-black px-2" to="/portfolio" activeClassName="active">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-black px-2" to="/certifications" activeClassName="active">
                    Certifications
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-black px-2" to="/contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
