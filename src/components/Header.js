import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <Link to="/" className="logo">
        <img
          src="/images/khasdar.svg"
          alt="KSM Logo"
          style={{ height: "100px" }}
        />
      </Link>
      <div className="right-icons">
        <div className="top-row-icons">
          <ul className="sci">
            <li>
              <a
                href="https://www.facebook.com/KhasdarMahotsavNagpur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@KhasdarMahotsavNagpur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/khasdarmahotsavnagpur/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="hamburger" id="hamburger" onClick={toggleMenu}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div className={`side-menu ${isMenuOpen ? "active" : ""}`} id="sideMenu">
        <div className="close-btn" id="closeMenu" onClick={closeMenu}>
          <i className="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/about-ksm" onClick={closeMenu}>
              About KSM
            </Link>
          </li>
          <li>
            <Link to="/about-khasdar-mahotsav" onClick={closeMenu}>
              About Khasdar Mohatsav
            </Link>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
