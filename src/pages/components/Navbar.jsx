import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
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

  const router = useRouter();

  return (
    <>
      <header
        className={`nav-container ${navbarBackgroundClass} ${
          !atTop || isNavOpen ? "black-text" : "white-text"
        }`}
      >
        <div className="navbar-box">
          <button
            id="dropdown-navbar-button"
            className="dropdown-navbar-icon navbar-fill"
            onClick={toggleNavbar}
          >
            {isNavOpen ? (
              <div
                className={`${
                  !atTop || isNavOpen
                    ? "menu-close-icon-black"
                    : "menu-close-icon-white"
                }`}
              ></div>
            ) : (
              <div
                className={`${
                  !atTop || isNavOpen
                    ? "menu-open-icon-black"
                    : "menu-open-icon-white"
                }`}
              ></div>
            )}
          </button>
          <div id="header-title">
            <div
              id="navbar-logo"
              className={`logo ${
                !atTop || isNavOpen ? "scrc-logo-black" : "scrc-logo-white"
              }`}
            ></div>
            <h1>SCRC 2024</h1>
          </div>
          <nav id="horizontal-nav-container" className="horizontal-navbar">
            <ul className="navbar-list">
              <li>
                <Link
                  id="home"
                  className={`navbar-link ${
                    router.pathname.includes("/home") ? "selected" : ""
                  }`}
                  href="/home"
                  onClick={handleSelectNavLink}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  id="key-dates"
                  className={`navbar-link ${
                    router.pathname.includes("/schedule") ? "selected" : ""
                  }`}
                  href="/schedule"
                  onClick={handleSelectNavLink}
                >
                  Key Dates
                </Link>
              </li>
              <li>
                <Link
                  id="sponsors"
                  className={`navbar-link ${
                    router.pathname.includes("/sponsors") ? "selected" : ""
                  }`}
                  href="/sponsors"
                  onClick={handleSelectNavLink}
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  id="faq"
                  className={`navbar-link ${
                    router.pathname.includes("/faq") ? "selected" : ""
                  }`}
                  href="/faq"
                  onClick={handleSelectNavLink}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  id="scrc-team"
                  className={`navbar-link ${
                    router.pathname.includes("/team") ? "selected" : ""
                  }`}
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
              id="home"
              className="navbar-link"
              href="/home"
              onClick={handleSelectNavLink}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              id="schedule"
              className="navbar-link"
              href="/schedule"
              onClick={handleSelectNavLink}
            >
              Schedule
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
