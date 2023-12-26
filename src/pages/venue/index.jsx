import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

export default function Venue() {
  return (
    <>
      <RellaxWrapper speed={-6}>
        <div id="venue-background">
          <div className="background-overlay"></div>
        </div>
      </RellaxWrapper>
      <RellaxWrapper speed={0}>
        <div className="page-body">
          <div className="page-header">
            <h2>South Central Regional Conference</h2>
            <div className="page-title">
              <h1>Venue</h1>
            </div>
            <h3>Texas A&M University | Memorial Student Center</h3>
          </div>
          <div className="page-content">
            <div id="event-details" className="content-container">
              <div>
                <h1>Event Details</h1>
                <section className="event-summary">
                  <div>
                    <b>Date:</b> March 2nd, 2024
                  </div>
                  <br />
                  <div>
                    <b>Time:</b> 8:30am - 7:00pm
                  </div>
                  <br />
                  <div>
                    <b>Location:</b> Memorial Student Center, Texas A&M
                    University
                  </div>
                  <br />
                  <div>
                    <b>Address:</b> 275 Joe Routt Blvd, College Station, TX
                    77843
                  </div>
                </section>
                <div className="tamu-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.7697243813577!2d-96.3441192223423!3d30.612257774642714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8646839854d18149%3A0x90311327f8c2221d!2sMemorial%20Student%20Center%20(MSC)!5e0!3m2!1sen!2sus!4v1701457058873!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RellaxWrapper>
    </>
  );
}
