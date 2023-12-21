import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const toggleNavbar = () => {
    if (isNavOpen) {
      // need to close
      document.getElementById("navbar-backdrop").classList.add("hide-overlay");
      document
        .getElementById("dropdown-nav-container")
        .classList.remove("open-nav");
      document
        .getElementById("dropdown-nav-container")
        .classList.add("close-nav");
    } else {
      // need to open
      document
        .getElementById("navbar-backdrop")
        .classList.remove("hide-overlay");
      document
        .getElementById("dropdown-nav-container")
        .classList.remove("close-nav");
      document
        .getElementById("dropdown-nav-container")
        .classList.add("open-nav");
    }
    setIsNavOpen(!isNavOpen);
  };

  const handleSelectNavLink = () => {
    if (isNavOpen) {
      toggleNavbar();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarBackgroundClass = atTop ? "top-navbar" : "scrolled-navbar";

  return (
    <>
      <header className={`nav-container ${navbarBackgroundClass}`}>
        <div className="navbar-box">
          <button
            id="dropdown-navbar-button"
            className="dropdown-navbar-icon navbar-fill"
            onClick={toggleNavbar}
          >
            {isNavOpen ? (
              <div className="menu-close-icon"></div>
            ) : (
              <div className="menu-open-icon"></div>
            )}
          </button>
          <a
            id="header-title"
            href="/"
            onClick={handleSelectNavLink}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              id="navbar-logo"
              className={`logo ${
                isHovered ? "scrc-logo-blue" : "scrc-logo-black"
              }`}
            ></div>
            <h1>SCRC</h1>
          </a>
          <nav id="horizontal-nav-container" className="horizontal-navbar">
            <ul className="navbar-list">
              <li>
                <Link
                  id="about"
                  className="navbar-link"
                  href="/about"
                  onClick={handleSelectNavLink}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  id="key-dates"
                  className="navbar-link"
                  href="/schedule"
                  onClick={handleSelectNavLink}
                >
                  Key Dates
                </Link>
              </li>
              <li>
                <Link
                  id="sponsors"
                  className="navbar-link"
                  href="/sponsors"
                  onClick={handleSelectNavLink}
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  id="faq"
                  className="navbar-link"
                  href="/faq"
                  onClick={handleSelectNavLink}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  id="scrc-team"
                  className="navbar-link"
                  href="/team"
                  onClick={handleSelectNavLink}
                >
                  SCRC Team
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <nav id="dropdown-nav-container" className="dropdown-navbar">
        <div className="header-offset"></div>
        <ul className="navbar-list">
          <li>
            <Link
              id="about"
              className="navbar-link"
              href="/about"
              onClick={handleSelectNavLink}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              id="key-dates"
              className="navbar-link"
              href="/schedule"
              onClick={handleSelectNavLink}
            >
              Key Dates
            </Link>
          </li>
          <li>
            <Link
              id="sponsors"
              className="navbar-link"
              href="/sponsors"
              onClick={handleSelectNavLink}
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              id="faq"
              className="navbar-link"
              href="/faq"
              onClick={handleSelectNavLink}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              id="scrc-team"
              className="navbar-link"
              href="/team"
              onClick={handleSelectNavLink}
            >
              SCRC Team
            </Link>
          </li>
        </ul>
      </nav>
      <div
        id="navbar-backdrop"
        className="hide-overlay"
        onClick={toggleNavbar}
      ></div>
    </>
  );
}
