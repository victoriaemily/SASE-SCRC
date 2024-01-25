import React, { useState } from "react";
import RellaxWrapper from "react-rellax-wrapper";
import WarningModal from "@/pages/components/WarningModal";

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

export default function Home() {
  const [isRegisterModalOpen, setIsOpenRegisterModalOpen] = useState(false);

  const handleOpenRegisterModal = (isOpen) => {
    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    if (isOpen) {
      window.addEventListener("DOMMouseScroll", preventDefault, false);
      window.addEventListener(wheelEvent, preventDefault, wheelOpt);
      window.addEventListener("touchmove", preventDefault, wheelOpt);
      window.addEventListener("keydown", preventDefaultForScrollKeys, false);
    } else {
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      window.removeEventListener("touchmove", preventDefault, wheelOpt);
      window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
    }
    setIsOpenRegisterModalOpen(isOpen);
  };

  return (
		<>
			<RellaxWrapper speed={-10}>
				<div id="home-background">
					<div className="background-overlay"></div>
				</div>
			</RellaxWrapper>
			<RellaxWrapper speed={0}>
				<div className="page-body">
					<div id="home-header" className="page-header">
						<h3>March 2nd, 2024</h3>
						<div className="page-title-container">
							<div className="page-title">
								<h1>South Central Regional Conference</h1>
							</div>
							<h2 id="home-motto-title">Soar with SASE</h2>
						</div>
						<h3>Texas A&M University</h3>
						<h3>College Station, Texas</h3>
					</div>
					<div id="home-content" className="page-content">
						<div id="about-scrc" className="content-container">
							<div className="container-innerbox">
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
									aspiring and unique asians, engineers, students, young adults,
									and more groups of attendees will gather to expand their
									professional, cultural, and networking opportunities via
									workshops, career fairs, and other professional interactions.
									Our goal is to facilitate an inspiring, engaging, and
									thoughtful space for Asians to tell their stories.
								</p>
							</div>
							<div className="registration-container">
								<a
									id="registration-link"
									target="_blank"
									href="https://registration.socio.events/e/scrc2024"
								>
									<div className="button-link-container">Register</div>
								</a>
							</div>
						</div>
						<div id="event-details" className="content-container">
							<div className="container-innerbox">
								<h1>Event Details</h1>
								<div className="event-summary-container">
									<section>
										<div>
											<b>Date:</b> March 2nd, 2024
										</div>
										<br />
										<div>
											<b>Time:</b> 8:30am - 7:30pm
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
									<div className="logo scrc-logo-black"></div>
								</div>
							</div>
						</div>
						<div id="about-sase" className="content-container">
							<div className="container-innerbox">
								<h1>What is SASE?</h1>
								<div>
									<section>
										<h2>SASE National</h2>
										<p>
											The Society of Asian Scientists and Engineers, also known
											as SASE, is a non-profit organization with over 100
											chapters across the United States. As a home and support
											system to thousands of collegiate and national volunteers,
											we at SASE embrace the mission to prepare Asian heritage
											scientists and engineers for success in the global
											professional world.
										</p>
									</section>
									<section>
										<h2>SASE TAMU</h2>
										<p>
											In our chapter at Texas A&M University, we enhance our
											experiences and growth through the combination of core
											pillars found in SASE and the Aggie spirit. We are
											dedicated to promoting community health while also
											nuturing and enhancing the leadership and professional
											skills of our members. We provide professionally and
											personally engaging events ranging from GBMs and workshops
											to mixers and trivia nights for 100+ registered members.
										</p>
									</section>
								</div>
							</div>
						</div>
						<div id="socials-contact" className="content-container">
							<div className="container-innerbox">
								<h1>Contact Us</h1>
								<div>
									<section>
										<h2>Find and reach out to us on our various platforms!</h2>
										<ul className="link-list">
											<li>
												<a
													className="link instagram-link"
													target="_blank"
													href="https://instagram.com/sasetamu"
												>
													<div className="social-icon instagram-icon"></div>
												</a>
											</li>
											<li>
												<a
													className="link gmail-link"
													target="_blank"
													href="mailto:sasetamu@gmail.com"
												>
													<div className="social-icon gmail-icon"></div>
												</a>
											</li>
											<li>
												<a
													className="link linktree-link"
													target="_blank"
													href="https://linktr.ee/tamusase"
												>
													<div className="social-icon linktree-icon"></div>
												</a>
											</li>
										</ul>
									</section>
								</div>
							</div>
						</div>
						<div id="registration-footer" className="content-container">
							<h1>Don't Forget to Register!</h1>
							<div className="registration-container">
								<a
									id="registration-link"
									target="_blank"
									href="https://registration.socio.events/e/scrc2024"
								>
									<div className="button-link-container">Register</div>
								</a>
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
