import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);

  const [isDesktop, setDesktop] = useState(true);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const updateMedia = () => {
    setDesktop(window.innerWidth > 640);
  };

  useEffect(() => {
    if (!(typeof window === "undefined")) {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }
  }, []);

  const handleSelectNavLink = () => {
    var scheduleContainer = document.getElementById("schedule-container");
    if (scheduleContainer.classList.contains("open-schedule")) {
      scheduleContainer.classList.remove("open-schedule");
      scheduleContainer.classList.add("close-schedule");
      document.body.style.overflow = "auto";
    }
    toggleNavbar();
  };

  return (
    <header className="nav-container">
      <div className="navbar-box">
        <a className="name-header" href="#" onClick={handleSelectNavLink}>
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
        <button className="dropdown-navbar-icon" onClick={toggleNavbar}>
          {isClick ? (
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
      {isClick && (
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
