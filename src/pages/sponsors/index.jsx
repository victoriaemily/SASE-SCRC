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
          <div className="page-header">
            <h2>South Central Regional Conference</h2>
            <div className="page-title">
              <h1>Sponsors</h1>
            </div>
            <h3>Texas A&M University | Memorial Student Center</h3>
          </div>
          <div className="page-content">
            <div className="content-container">
              <h1>More Information Coming Soon!</h1>
            </div>
          </div>
        </div>
      </RellaxWrapper>
    </>
  );
}
