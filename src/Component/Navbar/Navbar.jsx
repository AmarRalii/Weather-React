import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo (1).png";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <nav class="navbar navbar-expand-sm ">
        <div class="container">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <div className="logo-caption">
              <h2>Weather</h2>
              <p>tagline goes here</p>
            </div>
          </div>
          <button
            class="navbar-toggler d-lg-none bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className={activeLink === "/" ? "active" : ""}>
                <Link to="/" onClick={() => handleLinkClick("/")}>
                  Home
                </Link>
              </li>
              <li className={activeLink === "/news" ? "active" : ""}>
                <Link to="/news" onClick={() => handleLinkClick("/news")}>
                  News
                </Link>
              </li>
              <li className={activeLink === "/contact" ? "active" : ""}>
                <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
