import React from "react";

export default function LandingPage() {
  return (
    <section id="landing-page" className="wrapper">
      <div className="splash-title">
        <h1 className="sase-title">SASE</h1>
        <h1 className="sc-title">South Central</h1>
        <h1 className="rc-title">Regional Conference</h1>
      </div>
      <div className="bottom-page-half">
        <a className="registration-link" target="_blank" href="about:blank">
          Register
        </a>
        <div className="banner-plane">
          <div className="date-banner">March 2nd, 2024</div>
          <div className="right-facing-plane" id="plane"></div>
        </div>
      </div>
    </section>
  );
}
