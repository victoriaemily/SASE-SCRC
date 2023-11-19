import React from "react";

export default function LandingPage() {
  return (
    <section id="landing-page" className="wrapper">
      <div className="splash-title">
        <h1 id="sase-title">SASE</h1>
        <h1 id="sc-title">South Central</h1>
        <h1 id="rc-title">Regional Conference</h1>
        <h2 id="at-title">@Texas A&M University - College Station</h2>
      </div>
      <div className="key-info-container">
        <a className="registration-link" target="_blank" href="about:blank">
          Register
        </a>
        <div className="banner">
          <div className="date-banner">March 2nd, 2024</div>
          <div className="right-facing-plane" id="plane"></div>
        </div>
      </div>
    </section>
  );
}
