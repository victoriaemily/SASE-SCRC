import React, { useEffect, useState } from "react";
import {
  LandingPage,
  About,
  FAQ,
  Guide,
  SASE,
  Sponsors,
  Team,
} from "./components";

export default function Home() {
  const isWindowDefined = typeof window !== "undefined";

  const [isDesktop, setDesktop] = useState(
    isWindowDefined ? window.innerWidth > 640 : false
  );

  const updateMedia = () => {
    setDesktop(isWindowDefined ? window.innerWidth > 640 : false);
  };

  useEffect(() => {
    if (isWindowDefined) {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }
  }, [isWindowDefined]);
  return (
    <main>
      <div className="scroll-container">
        <LandingPage />
        <About />
        <Guide />
        <Sponsors />
        <FAQ />
        <Team />
        <SASE />
      </div>
      <header className="nav-container">
        <a className="name-header" href="#">
          SCRC
        </a>
        {isDesktop ? (
          <nav className="navbar">
            <a id="about" className="navbar-link" href="#about">
              About
            </a>
            <a id="key-dates" className="navbar-link" href="#key-dates">
              Key Dates
            </a>
            <a id="sponsors" className="navbar-link" href="#sponsors">
              Sponsors
            </a>
            <a id="faq" className="navbar-link" href="#faq">
              FAQ
            </a>
            <a id="scrc-team" className="navbar-link" href="#scrc-team">
              SCRC Team
            </a>
            <a id="tamu-sase" className="navbar-link" href="#tamu-sase">
              TAMU SASE
            </a>
          </nav>
        ) : (
          <nav className="navbar">
            <a id="key-dates" className="navbar-link" href="#key-dates">
              Key Dates
            </a>
            <a id="sponsors" className="navbar-link" href="#sponsors">
              Sponsors
            </a>
            <a id="faq" className="navbar-link" href="#faq">
              FAQ
            </a>
          </nav>
        )}
      </header>
      <a className="nav-return-top" href="#">
        Return to Top
      </a>
    </main>
  );
}
