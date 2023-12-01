import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSelectNavLink = () => {
    if (isNavOpen) {
      toggleNavbar();
    }
  };

  return (
    <header className="nav-container">
      <div className="navbar-box">
        <a id="header-title" href="#" onClick={handleSelectNavLink}>
          SCRC
        </a>
        <nav className="horizontal-navbar">
          <a
            id="about"
            className="navbar-link"
            href="#about"
            onClick={handleSelectNavLink}
          >
            About
          </a>
          <a
            id="key-dates"
            className="navbar-link"
            href="#key-dates"
            onClick={handleSelectNavLink}
          >
            Key Dates
          </a>
          <a
            id="sponsors"
            className="navbar-link"
            href="#sponsors"
            onClick={handleSelectNavLink}
          >
            Sponsors
          </a>
          <a
            id="faq"
            className="navbar-link"
            href="#faq"
            onClick={handleSelectNavLink}
          >
            FAQ
          </a>
          <a
            id="scrc-team"
            className="navbar-link"
            href="#scrc-team"
            onClick={handleSelectNavLink}
          >
            SCRC Team
          </a>
        </nav>
        <button
          id="dropdown-navbar-button"
          className="dropdown-navbar-icon navbar-fill"
          onClick={toggleNavbar}
        >
          {isNavOpen ? (
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {isNavOpen && (
        <nav className="dropdown-navbar">
          <a
            id="about"
            className="navbar-link"
            href="#about"
            onClick={handleSelectNavLink}
          >
            About
          </a>
          <a
            id="key-dates"
            className="navbar-link"
            href="#key-dates"
            onClick={handleSelectNavLink}
          >
            Key Dates
          </a>
          <a
            id="sponsors"
            className="navbar-link"
            href="#sponsors"
            onClick={handleSelectNavLink}
          >
            Sponsors
          </a>
          <a
            id="faq"
            className="navbar-link"
            href="#faq"
            onClick={handleSelectNavLink}
          >
            FAQ
          </a>
          <a
            id="scrc-team"
            className="navbar-link"
            href="#scrc-team"
            onClick={handleSelectNavLink}
          >
            SCRC Team
          </a>
        </nav>
      )}
    </header>
  );
}
