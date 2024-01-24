import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

export default function FAQ() {
  return (
		<>
			<RellaxWrapper speed={-6}>
				<div id="faq-background">
					<div className="background-overlay"></div>
				</div>
			</RellaxWrapper>
			<RellaxWrapper speed={0}>
				<div className="page-body">
					<div className="page-header">
						<h2>South Central Regional Conference</h2>
						<div className="page-title">
							<h1>FAQ</h1>
						</div>
						<h3>Texas A&M University | Memorial Student Center</h3>
					</div>
					<div id="faq-content" className="page-content">
						<div id="faq-scrc-intro" className="content-container">
							<h1>What is the South Central Regional Conference (SCRC)?</h1>
							<p>
								The South Central Regional Conference, abbreviated as SCRC, is
								one of the five annual conferences hosted by SCRC chapters
								across the United States. SCRC will be held at Texas A&M
								University's{" "}
								<a
									className="paragraph-hyperlink"
									href="https://maps.app.goo.gl/U6oZvEzSZeXAEWMi6"
									target="_blank"
								>
									Memorial Student Center (MSC)
								</a>{" "}
								on <b>March 02, 2024</b>. To find more details see our{" "}
								<a className="paragraph-hyperlink" href="#about">
									about page
								</a>
								.
							</p>
						</div>
						<div className="content-container">
							<h1>Registration</h1>
							<div>
								<h2>How much will it cost to attend?</h2>
								<table className="registration-table">
									<tbody>
										<tr className="header-row">
											<th>Registration Type</th>
											<th>Ticketing Period</th>
											<th>Cost</th>
											<th className="benefits">Benefits</th>
										</tr>
										<tr>
											<th>Early Bird</th>
											<th>Jan 24 - Feb 09</th>
											<th>$25.00</th>
											<th className="benefits">
												Printed name on badge, t-shirt, sticker, and lunch.
											</th>
										</tr>
										<tr>
											<th>General Ticket</th>
											<th>Feb 10 - Feb 24</th>
											<th>$35.00</th>
											<th className="benefits">
												Non-printed name on badge, t-shirt, sticker, and lunch.
											</th>
										</tr>
										<tr>
											<th>Late Registration</th>
											<th>Feb 25 - March 2</th>
											<th>$45.00</th>
											<th className="benefits">
												Non-printed name on badge, t-shirt, sticker, and lunch.
												(Subjected to supply availability)
											</th>
										</tr>
									</tbody>
								</table>
							</div>
							<div>
								<h2>Can I register as a group?</h2>
								<p>
									Registration will only be available as an individual signup.
								</p>
							</div>
							<div>
								<h2>Can I refund my ticket?</h2>
								<p>
									The South Central Regional Conference will be held on March
									02, 2024.
								</p>
							</div>
						</div>
						<div className="content-container">
							<h1>Preparations and Expectations</h1>
							<div>
								<h2>What can I expect coming to SCRC?</h2>
								<p>
									You can expect to meet numerous new people of unique
									backgrounds where we will be doing our all to provide a fun
									and worthwhile experience.
								</p>
							</div>
							<div>
								<h2>What should I wear at SCRC?</h2>
								<p>
									You will be given the opportunity to connect with various
									company representatives, so you should wear{" "}
									<b>business casual</b> at the minimum, but{" "}
									<b>business professional</b> would be best. You will be giving
									first impressions throughout the entire day, so you should
									look your best!
								</p>
							</div>
							<div>
								<h2>How should I prepare for SCRC?</h2>
								<p>
									Bring copies of your <b>resume</b> for the Career Fair! Bring
									your <b>phone</b> and a way to keep it charged! Sleep plenty,
									and most importantly, <b>be yourself</b>!
								</p>
							</div>
						</div>
						<div className="content-container">
							<h1>Keeping up to Date</h1>
							<div>
								<h2>How can I stay up to date on the event?</h2>
								<p>
									Any new information will be regularly updated and made
									available directly on this website. However, you can find live
									updates about the conference on our Instagram{" "}
									<a target="_blank" href="https://www.instagram.com/sasetamu/">
										@sasetamu
									</a>{" "}
									or our chapter's{" "}
									<a target="_blank" href="https://discord.gg/jYPrkJST4G">
										Discord
									</a>
								</p>
							</div>
							<div>
								<h2>Who can I contact if I have questions?</h2>
								<p>
									You are welcome to contact us via our email with any questions
									regarding SCRC:{" "}
									<a
										className="link"
										target="_blank"
										href="mailto:sasetamu@gmail.com"
									>
										sasetamu@gmail.com
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</RellaxWrapper>
		</>
	);
}
