import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

export default function Venue() {
  return (
		<>
			<RellaxWrapper speed={-6}>
				<div
					role="img"
					aria-label="South side angle of Memorial Student Center (MSC)"
					id="venue-background"
				>
					<div className="background-overlay"></div>
				</div>
			</RellaxWrapper>
			<RellaxWrapper speed={0}>
				<div className="page-body">
					<div className="common-header page-header">
						<h2>South Central Regional Conference</h2>
						<div className="page-title">
							<h1>Venue</h1>
						</div>
						<h3>Texas A&M University | Memorial Student Center</h3>
					</div>
					<div className="horizontal-phone-header page-header">
						<div className="page-title">
							<h1>Venue</h1>
						</div>
						<h3>South Central Regional Conference</h3>
					</div>
					<div className="page-content">
						<div id="event-details" className="content-container">
							<div>
								<h1>Texas A&M University</h1>
								<section id="venue-summary-container">
									<div id="venue-quick-view">
										<h2 id="venue-title" className="venue-header">
											Memorial Student Center
										</h2>
										<h2 className="venue-header">Texas A&M University</h2>
										<h2 className="venue-header">
											275 Joe Routt Blvd, College Station, TX 77843
										</h2>
										<div
											role="img"
											aria-label="Rudder Plaza angle of Memorial Student Center (MSC)"
											id="venue-image"
										></div>
										<div id="venue-page-map" className="tamu-map">
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
									<div id="venue-information">
										<h2>
											The SASE South Central Regional Conference will be held at{" "}
											<b>Texas A&M University</b> in{" "}
											<b>College Station, Texas</b>. The conference will be held
											in the Memorial Student Center.
										</h2>
										<h3>Memorial Student Center</h3>
										<p>
											The Memorial Student Center, commonly referred to as the
											MSC, is the home of Texas A&M's service, academic and
											professional development, and cultural awareness.
										</p>
										<h3>Conference Space</h3>
										<p>
											All conference events will be held on the second floor of
											the Memorial Student Center. All events will be held in
											one of rooms{" "}
											<b>2400 (Gates Ballroom), 2401, 2406A, or 2406B</b>.
										</p>
										<p>
											Below are provided <a href="#floor-maps">floor maps</a> of
											the venue.
										</p>
										<section id="floor-maps" className="resource-section">
											<h2>Memorial Student Center (MSC)</h2>
											<div className="image-container">
												<div>
													<h3>1st Floor</h3>
													<div
														role="img"
														aria-label="The first level floor map of Memorial Student Center (MSC)"
														id="msc-floor1"
													></div>
												</div>
												<div>
													<h3>2nd Floor</h3>
													<div
														role="img"
														aria-label="The second level floor map of Memorial Student Center (MSC)"
														id="msc-floor2"
													></div>
												</div>
											</div>
										</section>
										<h3>Parking</h3>
										<p>
											All nearby lots/garages will only be available via{" "}
											<b>paid parking</b>. All options shown below in the{" "}
											<a href="#parking-maps">parking map</a> are within 10
											minute walks of the MSC. All on-campus parking options are
											subjected to the same rates. The following is a summary of
											the rates that can be expected:
										</p>
										<table className="parking-table">
											<tbody>
												<tr className="header-row">
													<th>Duration</th>
													<th>6:00am - 5:59pm</th>
													<th>6:00pm - 5:59am</th>
												</tr>
												<tr>
													<th>0-1 hour</th>
													<th>$3.00</th>
													<th>$1.50</th>
												</tr>
												<tr>
													<th>1-2 hours</th>
													<th>$5.00</th>
													<th>$2.50</th>
												</tr>
												<tr>
													<th>2-3 hours</th>
													<th>$7.00</th>
													<th>$3.50</th>
												</tr>
												<tr>
													<th>3-4 hours</th>
													<th>$9.00</th>
													<th>$4.50</th>
												</tr>
												<tr>
													<th>Each additional 1 hour</th>
													<th>$1.00</th>
													<th>$0.50</th>
												</tr>
											</tbody>
										</table>
										<section id="parking-maps" className="resource-section">
											<h2>Parking Maps</h2>
											<div className="image-container">
												<div
													role="img"
													aria-label="Map of availabel parking lots for access to the Memorial Student Center (MSC)"
													id="msc-parking"
												></div>
											</div>
										</section>
										<h3>Hotels</h3>
										<p>
											Below are weighable <a href="#hotels">hotel options</a>.
											The provided selection are hotels that are either:
										</p>
										<ul className="info-list">
											<li>Within walking distance (&lt;1 Mile)</li>
											<li>Adjacent to campus (1-3 Miles)</li>
											<li>Along Highway 6 (3+ Miles)</li>
										</ul>
										<section id="hotels" className="resource-section">
											<div id="hotel-info-container">
												<div className="hotel-info-card">
													<h2>
														<a
															href="https://www.texasamhotelcc.com/"
															target="_blank"
														>
															Texas A&M Hotel and Conference Center
														</a>
													</h2>
													<p>
														<a
															href="https://www.google.com/travel/search?q=tamu%20hotels&g2lb=2502548%2C2503771%2C2503781%2C2504375%2C4258168%2C4284970%2C4291517%2C4597339%2C4814050%2C4874190%2C4893075%2C4924070%2C4965990%2C10208620%2C72277293%2C72298667%2C72302247%2C72313836%2C72317059%2C72406588%2C72412680%2C72414906%2C72421566%2C72423675%2C72424729%2C72430562%2C72440517%2C72442338%2C72455021%2C72458707%2C72462261%2C72470896&hl=en-US&gl=us&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaXwo_Ej0yJTB4ODY0NjgzZjczM2MwMDAwMToweDk3NDdiOGE0YjljMDNiYzg6FFRleGFzIEEmTSBVbml2ZXJzaXR5EhwSFAoHCOgPEAEYCBIHCOgPEAEYCRgBMgQIABAAKgcKBToDVVNE&qs=CAEyJ0Noa0k5dFdTNXItdjU1WkVHZzB2Wnk4eE1XZG1NemcxWWpkc0VBRTgGQgkJ9qrE_HudLURCCQnVSSQxgpKBCEIJCWIajqYdNVA9SABaAggB&ap=KigKEgnKUnyX0pU-QBFEQCExcBZYwBISCQjH2piOoT5AEURAIcVXE1jAMABoAQ&ictx=1&sa=X&ved=0CAAQ5JsGahgKEwiY8ZK63ceDAxUAAAAAHQAAAAAQiwk&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls"
															target="_blank"
														>
															177 Joe Routt Boulevard (0.2 miles)
														</a>
													</p>
													<p>2 min walk | 0 min drive</p>
													<p>+1 (979) 260-2235</p>
												</div>
												<div className="hotel-info-card">
													<h2>
														<a
															href="https://www.cavalrycourt.com/"
															target="_blank"
														>
															Cavalry Court
														</a>
													</h2>
													<p>
														<a
															href="https://www.google.com/travel/search?q=tamu%20hotels&g2lb=2502548%2C2503771%2C2503781%2C2504375%2C4258168%2C4284970%2C4291517%2C4597339%2C4814050%2C4874190%2C4893075%2C4924070%2C4965990%2C10208620%2C72277293%2C72298667%2C72302247%2C72313836%2C72317059%2C72406588%2C72412680%2C72414906%2C72421566%2C72423675%2C72424729%2C72430562%2C72440517%2C72442338%2C72455021%2C72458707%2C72462261%2C72470896&hl=en-US&gl=us&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaXwo_Ej0yJTB4ODY0NjgzZjczM2MwMDAwMToweDk3NDdiOGE0YjljMDNiYzg6FFRleGFzIEEmTSBVbml2ZXJzaXR5EhwSFAoHCOgPEAEYCBIHCOgPEAEYCRgBMgQIABAAKgcKBToDVVNE&qs=CAEyJ0Noa0lrcDZtdUtDeS1Nb1pHZzB2Wnk4eE1XTXhibVJxWDNoakVBRTgGQgkJ9qrE_HudLURCCQnVSSQxgpKBCEIJCWIajqYdNVA9SABaAggB&ap=KigKEgl9iyNJep4-QBFV-JGoFRZYwBISCQHSfShpoT5AEVX4kY1PFVjAMABoAQ&ictx=1&sa=X&ved=0CAAQ5JsGahgKEwi4tdjD9seDAxUAAAAAHQAAAAAQjQQ&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls"
															target="_blank"
														>
															200 Century Court (1.2 miles)
														</a>
													</p>
													<p>27 min walk | 7 min drive</p>
													<p>+1 (979) 485-7337</p>
												</div>
												<div className="hotel-info-card">
													<h2>
														<a
															href="https://www.hilton.com/en/hotels/clleses-embassy-suites-college-station/?SEO_id=GMB-AMER-ES-CLLESES&y_source=1_ODIyMDg4OS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
															target="_blank"
														>
															Embassy Suites by Hilton
														</a>
													</h2>
													<p>
														<a
															href="https://www.google.com/travel/search?q=tamu%20hotels&g2lb=2502548%2C2503771%2C2503781%2C2504375%2C4258168%2C4284970%2C4291517%2C4597339%2C4814050%2C4874190%2C4893075%2C4924070%2C4965990%2C10208620%2C72277293%2C72298667%2C72302247%2C72313836%2C72317059%2C72406588%2C72412680%2C72414906%2C72421566%2C72423675%2C72424729%2C72430562%2C72440517%2C72442338%2C72455021%2C72458707%2C72462261%2C72470896&hl=en-US&gl=us&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaXwo_Ej0yJTB4ODY0NjgzZjczM2MwMDAwMToweDk3NDdiOGE0YjljMDNiYzg6FFRleGFzIEEmTSBVbml2ZXJzaXR5EhwSFAoHCOgPEAEYCBIHCOgPEAEYCRgBMgQIABAAKgcKBToDVVNE&qs=CAEyJ0Noa0kxWk9SaWFQUTVNQUlHZzB2Wnk4eE1XWXdNM0ZyWTJKNEVBRTgGQgkJ9qrE_HudLURCCQnVSSQxgpKBCEIJCWIajqYdNVA9SABaAggB&ap=KigKEgmNqRv3MZ8-QBFof8uV1BVYwBISCQf45NAgoj5AEWh_y3oOFVjAMABoAQ&ictx=1&sa=X&ved=0CAAQ5JsGahgKEwi4tdjD9seDAxUAAAAAHQAAAAAQjgE&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls"
															target="_blank"
														>
															201 University Drive East (1.5 miles)
														</a>
													</p>
													<p>35 min walk | 8 min drive</p>
													<p>+1 (979) 260-6000</p>
												</div>
											</div>
										</section>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</RellaxWrapper>
		</>
	);
}
