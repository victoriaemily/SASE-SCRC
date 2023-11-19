import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Guide from "./components/Guide";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import Background from "./components/Background";

export default function Home() {
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
      <Navbar />
      <Background />
      {/* <a className="nav-return-top" href="#">
        Return to Top
      </a> */}
    </main>
  );
}
