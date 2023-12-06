import React from "react";
import Navbar from "@/pages/Navbar";
import LandingPage from "@/pages/LandingPage";
import About from "@/pages/About";
import Guide from "@/pages/Guide";
import Sponsors from "@/pages/Sponsors";
import FAQ from "@/pages/FAQ";
import Team from "@/pages/Team";
import Background from "@/pages/Background";

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
