import React, { useState } from "react";
import RellaxWrapper from "react-rellax-wrapper";
import WarningModal from "@/pages/components/WarningModal";

export default function Home() {
  const [isRegisterModalOpen, setIsOpenRegisterModalOpen] = useState(false);

  const handleOpenRegisterModal = (isOpen) => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
    setIsOpenRegisterModalOpen(isOpen);
  };

  return (
    <>
      <RellaxWrapper speed={-10}>
        <div id="home-background">
          <div id="background-overlay"></div>
        </div>
      </RellaxWrapper>
      <RellaxWrapper speed={0}>
        <div id="home-body">
          <div id="home-header">
            <h3>March 2nd, 2024</h3>
            <div className="conference-title">
              <h1>South Central Regional Conference</h1>
            </div>
            <h2>Soar with SASE</h2>
            <h3>Texas A&M University | College Station, Texas</h3>
            <div className="registration-container">
              <a
                id="registration-link"
                target="_blank"
                onClick={() => handleOpenRegisterModal(true)}
              >
                <div className="button-link-container">Register</div>
              </a>
            </div>
          </div>
          <div id="home-content">
            <div id="about-scrc" className="about-container">
              <div>
                <p>
                  The <b>South Central Regional Conference</b>, also known as{" "}
                  <b>SCRC</b>, is one of the five annual regional conferences
                  held across the United States. Within the south-central
                  region, our conference encompasses SASE chapters from Texas,
                  Oklahoma, and Louisiana.
                </p>
                <br />
                <p>
                  The event is an in-person, one-day event where over 200
                  aspiring attendees will gather to expand their professional,
                  cultural, and networking opportunities via workshops, career
                  fairs, and other professional interactions. Our goal is to
                  facilitate an inspiring, engaging, and thoughtful space for
                  Asians to tell their stories.
                </p>
              </div>
              <div className="registration-container">
                <a
                  id="registration-link"
                  target="_blank"
                  onClick={() => handleOpenRegisterModal(true)}
                >
                  <div className="button-link-container">Register</div>
                </a>
              </div>
            </div>
            <div id="event-details" className="about-container">
              <div>
                <h1>Event Details</h1>
                <section id="event-summary">
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
            <div id="about-sase" className="about-container">
              <h1>What is SASE?</h1>
              <div>
                <section>
                  <h2>SASE National</h2>
                  <p>
                    The Society of Asian Scientists and Engineers, also known as
                    SASE, is a non-profit organization with over 100 chapters
                    across the United States. As a home and support system to
                    thousands of collegiate and national volunteers, we at SASE
                    embrace the mission to prepare Asian heritage scientists and
                    engineers for success in the global professional world.
                  </p>
                </section>
                <section>
                  <h2>SASE TAMU</h2>
                  <p>
                    In our chapter at Texas A&M University, we enhance our
                    experiences and growth through the combination of core
                    pillars found in SASE and the Aggie spirit. We are dedicated
                    to promoting community health while also nuturing and
                    enhancing the leadership and professional skills of our
                    members. We provide professionally and personally engaging
                    events ranging from GBMs and workshops to mixers and trivia
                    nights for 100+ registered members.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </RellaxWrapper>
      <WarningModal
        isModalOpen={isRegisterModalOpen}
        setIsModalOpen={handleOpenRegisterModal}
      />
    </>
  );
}
