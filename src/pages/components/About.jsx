import React from "react";

export default function About() {
  const handleSwitchView = (event) => {
    const tabText = event.target.textContent;
    const tabID = tabText.toLowerCase().replace(/ /g, "-") + "-tab";
    const tabs = ["scrc-tab", "sase-tab", "trip-details-tab"];
    for (let i = 0; i < 3; ++i) {
      if (tabs[i] === tabID) {
        document.getElementById(tabID).classList.remove("hidden");
      } else {
        document.getElementById(tabs[i]).classList.add("hidden");
      }
      if (tabID !== "trip-details-tab") {
        document.getElementById("trip-details-tab").style.display = "none";
      } else {
        document.getElementById("trip-details-tab").style.display = "flex";
      }
    }
  };
  return (
    <section id="about" className="wrapper">
      <div className="plane-tv-frame">
        <nav className="plane-tv-nav-container">
          <button
            className="plane-tv-nav-button left-button"
            type="button"
            onClick={(event) => handleSwitchView(event)}
          >
            Trip Details
          </button>
          <button
            className="plane-tv-nav-button middle-button"
            type="button"
            onClick={(event) => handleSwitchView(event)}
          >
            SASE
          </button>
          <button
            className="plane-tv-nav-button right-button"
            type="button"
            onClick={(event) => handleSwitchView(event)}
          >
            SCRC
          </button>
        </nav>
        <div id="trip-details-tab" className="about-tab-container">
          <h3>Trip Details</h3>
          <p>
            March 2nd, 2024
            <br />
            Texas A&M University, College Station, Texas
            <br />
            Memorial Student Center (MSC)
            <br />
            275 Joe Routt Blvd, College Station, TX 77843
          </p>
          <div className="tamu-map">map of tamu goes here</div>
        </div>
        <div id="scrc-tab" className="about-tab-container hidden">
          <h3>South Central Regional Conference</h3>
          <p>
            The South Central Regional Conference, also known as SCRC, one of
            the five annual regional conferences across the United States.
            Within the south-central region, our conference encompasses SASE
            chapters from Texas, Oklahoma, and Louisiana. Over 200 members will
            gathered together for professional, cultural, and networking
            opportunities.
          </p>
        </div>
        <div id="sase-tab" className="about-tab-container hidden">
          <h3>SASE National</h3>
          <p>
            The Society of Asian Scientists and Engineers, also known as SASE,
            is a non-profit organization with over 100 chapters across the
            United States. As a home and support system to thousands of
            collegiate and national volunteers, we at SASE embrace the mission
            to prepare Asian heritage scientists and engineers for success in
            the global professional world.
          </p>
          <h3>SASE TAMU</h3>
          <p>
            In our chapter at Texas A&M University, we enhance our experiences
            and growth through the combination of core pillars found in SASE and
            the Aggie spirit. We are dedicated to promoting community health
            while also nuturing and enhancing the leadership and professional
            skills of our members. We provide professionally and personally
            engaging events ranging from GBMs and workshops to mixers and trivia
            nights for 100+ registered members.
          </p>
        </div>
      </div>
    </section>
  );
}
