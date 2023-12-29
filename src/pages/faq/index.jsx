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
              <h1>Sponsors</h1>
            </div>
            <h3>Texas A&M University | Memorial Student Center</h3>
          </div>
          <div className="page-content">
            <div className="content-container">
              <div>
                <h1>What is the South Central Regional Conference (SCRC)?</h1>

                <p>
                  The South Central Regional Conference, abbreviated as SCRC, is
                  one of the five annual conferences hosted by SCRC chapters
                  across the United States. To see more details see our{" "}
                  <a className="paragraph-hyperlink" href="#about">
                    about page
                  </a>
                  .
                </p>
              </div>
              <div>
                <h1>When is SCRC 2024?</h1>
                <p>
                  The South Central Regional Conference will be held on March
                  02, 2024.
                </p>
              </div>
              <div>
                <h1>Where is SCRC 2024?</h1>
                <p>
                  The South Central Regional Conference will be held at Texas
                  A&M University's{" "}
                  <a
                    className="paragraph-hyperlink"
                    href="https://maps.app.goo.gl/U6oZvEzSZeXAEWMi6"
                    target="_blank"
                  >
                    Memorial Student Center (MSC)
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
