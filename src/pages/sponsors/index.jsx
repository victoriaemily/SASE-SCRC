import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

export default function Sponsors() {
  return (
		<>
			<RellaxWrapper speed={-6}>
				<div id="sponsors-background">
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
								<div className="sponsor-logo shell-logo"></div>
								<div className="sponsor-logo accma-logo"></div>
								<div className="sponsor-logo cdm-smith-logo"></div>
								<div className="sponsor-logo nasa-logo"></div>
								<div className="sponsor-logo ti-logo"></div>
								<div className="sponsor-logo ge-vernova-logo"></div>
							</div>
							<h1 id="more-sponsors-header">More Sponsors Coming Soon!</h1>
						</div>
					</div>
				</div>
			</RellaxWrapper>
		</>
	);
}
