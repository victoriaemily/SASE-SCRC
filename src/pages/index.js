import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import About from "./About";
import Guide from "./Guide";
import Sponsors from "./Sponsors";
import FAQ from "./FAQ";
import Team from "./Team";
import Background from "./Background";

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
    </main>
  );
}
