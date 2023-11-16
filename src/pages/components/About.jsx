import React from "react";

export default function About() {
  return (
    <section id="about" className="wrapper">
      <h2>About</h2>
      <h3>Regional Conference</h3>
      <p>
      SASE holds 5 annual regional conferences across the nation. Within the
      south-central area, our regional conference encompasses SASE
      chapters from Texas, Oklahoma, and Louisiana. Over 200 members are
      gathered together for professional, cultural, and networking
      opportunities. From workshops, to career fairs, our members are excited
      to network with your company representatives.
      </p>

      <div className="about-container">
        <div className="about-wrapper about-left-box">
          <h3>Participating Chapters</h3>
          <ul>
            <li>Texas A&M University</li>
            <li>University of Texas (Austin)</li>
            <li>University of Texas (Dallas)</li>
            <li>University of Texas (Arlington)</li>
            <li>University of Houston</li>
            <li>Louisiana State University</li>
            <li>Oklahoma State University</li>
            <li>Baylor University</li>
          </ul>
        </div>

        <div className="about-wrapper about-right-box">
          <h3>Corporate Sponsorship</h3>
          <p>
          Corporate support is fundamental to the conference. Sponsorships
          helps fund the venue and opportunity for our members to connect with
          your recruiters. As sponsors, you are given the opportunity to host
          information sessions, events, and workshops to give our members
          insight into your industry.
          </p>
        </div>
      </div>
    </section>
  );
}
