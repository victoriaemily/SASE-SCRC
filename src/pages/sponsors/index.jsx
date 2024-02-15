import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

export default function Sponsors() {
  return (
		<>
			<RellaxWrapper speed={-6}>
				<div
					role="img"
					aria-label="Skyline view of Texas A&M University"
					id="sponsors-background"
				>
					<div className="background-overlay"></div>
				</div>
			</RellaxWrapper>
			<RellaxWrapper speed={0}>
				<div className="page-body">
					<div className="common-header page-header">
						<h2>South Central Regional Conference</h2>
						<div className="page-title">
							<h1>Sponsors & Attendees</h1>
						</div>
						<h3>Texas A&M University | Memorial Student Center</h3>
					</div>
					<div className="horizontal-phone-header page-header">
						<div className="page-title">
							<h1>Sponsors & Attendees</h1>
						</div>
						<h3>South Central Regional Conference</h3>
					</div>
					<div className="page-content">
						<div id="sponsor-container" className="content-container">
							<div className="logo-container">
								<div
									role="img"
									aria-label="Shell logo"
									className="sponsor-logo shell-logo"
								></div>
								<div
									role="img"
									aria-label="Army Civilian Career Management Activity (ACCMA) logo"
									className="sponsor-logo accma-logo"
								></div>
								<div
									role="img"
									aria-label="CDM Smith logo"
									className="sponsor-logo cdm-smith-logo"
								></div>
								<div
									role="img"
									aria-label="NASA logo"
									className="sponsor-logo nasa-logo"
								></div>
								<div
									role="img"
									aria-label="Texas Instruments logo"
									className="sponsor-logo ti-logo"
								></div>
								<div
									role="img"
									aria-label="GE Vernova logo"
									className="sponsor-logo ge-vernova-logo"
								></div>
							</div>
							{/* <h1 id="more-sponsors-header">More Sponsors Coming Soon!</h1> */}
						</div>
					</div>
				</div>
			</RellaxWrapper>
		</>
	);
}
