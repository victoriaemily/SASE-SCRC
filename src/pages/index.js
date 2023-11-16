"use client";
import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Guide from "./components/Guide";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import Background from "./components/Background";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = ()  =>{
    setIsClick(!isClick);
  }

  return (
    <>
      <nav className="bg-gray-700 p-5">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#" className="text-white text-5xl">
                  sase
                </a>
              </div>
            </div>
            <div className="flex hidden md:block">
              <div className="ml-4 flex items-center space-x-6">
                <a href="#about" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                  About
                </a>
                <a href="#key-dates" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                  Key Dates
                </a>
                <a href="#sponsors" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                  Sponsors
                </a>
                <a href="#faq" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                  FAQ
                </a>
                <a href="#scrc-team" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                  SCRC Team
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
              className="inline-flex items-center justify center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}>
                {isClick ? (
                  <svg  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor" >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                About
              </a>
              <a href="#key-dates" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Key Dates
              </a>
              <a href="#sponsors" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Sponsors
              </a>
              <a href="#faq" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                FAQ
              </a>
              <a href="#scrc-team" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                SCRC Team
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};


export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="scroll-container">
        <LandingPage />
        <About />
        <Guide />
        <Sponsors />
        <FAQ />
        <Team />
      </div>
      <Background />
      {/* <a className="nav-return-top" href="#">
        Return to Top
      </a> */}
    </main>
  );
}
