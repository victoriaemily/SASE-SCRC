import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Guide from "./components/Guide";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import Background from "./components/Background";

export default function Home() {
  const [isDesktop, setDesktop] = useState(true);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 640);
  };

  useEffect(() => {
    if (!(typeof window === "undefined")) {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }
  }, []);

  const handleCloseModals = () => {
    var scheduleContainer = document.getElementById("schedule-container");
    if (scheduleContainer.classList.contains("open-schedule")) {
      scheduleContainer.classList.remove("open-schedule");
      scheduleContainer.classList.add("close-schedule");
      document.body.style.overflow = "auto";
    }
  };

  return (
    <main>
      <div className="scroll-container">
        <LandingPage />
        <About />
        <Guide />
        <Sponsors />
        <FAQ />
        <Team />
      </div>
      <header className="nav-container">
        <a className="name-header" href="#">
          SCRC
        </a>
        {isDesktop ? (
          <nav className="navbar">
            <a
              id="about"
              className="navbar-link"
              href="#about"
              onClick={handleCloseModals}
            >
              About
            </a>
            <a
              id="key-dates"
              className="navbar-link"
              href="#key-dates"
              onClick={handleCloseModals}
            >
              Key Dates
            </a>
            <a
              id="sponsors"
              className="navbar-link"
              href="#sponsors"
              onClick={handleCloseModals}
            >
              Sponsors
            </a>
            <a
              id="faq"
              className="navbar-link"
              href="#faq"
              onClick={handleCloseModals}
            >
              FAQ
            </a>
            <a
              id="scrc-team"
              className="navbar-link"
              href="#scrc-team"
              onClick={handleCloseModals}
            >
              SCRC Team
            </a>
          </nav>
        ) : (
          <nav className="navbar">
            <a
              id="key-dates"
              className="navbar-link"
              href="#key-dates"
              onClick={handleCloseModals}
            >
              Key Dates
            </a>
            <a
              id="sponsors"
              className="navbar-link"
              href="#sponsors"
              onClick={handleCloseModals}
            >
              Sponsors
            </a>
            <a
              id="faq"
              className="navbar-link"
              href="#faq"
              onClick={handleCloseModals}
            >
              FAQ
            </a>
          </nav>
        )}
      </header>
      <Background />
      {/* <a className="nav-return-top" href="#">
        Return to Top
      </a> */}
    </main>
  );
}
